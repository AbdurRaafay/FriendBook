import { ChatAdapter, User, Message , ChatParticipantStatus, ParticipantResponse, IChatParticipant, ChatParticipantType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { CommunicationService } from 'src/app/services/communication.service';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';

export class ChatControl extends ChatAdapter
{
    chatHistory: Array<{userImageID: string, userMessagesHistory: Array<Message>}> = [];

    public commService: CommunicationService;
    public wsService: WebsocketmessagingService;
    public mockedParticipants: IChatParticipant[] = [];

    registerCallBacks()
    {
        this.wsService.chatObs.subscribe(res=>
            {
                this.insertMessage(res);
            });
        this.wsService.onlineObs.subscribe(res=>
            {
                this.setOnlineStatus(res);
            });
        this.wsService.newFriendObs.subscribe(res=>
            {
                this.addNewFriend(res);
            });
    }

    listFriends(): Observable<ParticipantResponse[]> 
    {
        return of(this.mockedParticipants.map(user => 
        {
            let participantResponse = new ParticipantResponse();
      
            participantResponse.participant = user;
            participantResponse.metadata = 
            {
              totalUnreadMessages: 0
            }
      
            return participantResponse;
        }));
    }

    addNewFriend(payload: any)
    {
        this.createUser(payload);
        this.listFriends().subscribe(res=>{this.onFriendsListChanged(res)});
    }

    setFriendsList(): void
    {
        var friendsList: any;
        this.mockedParticipants.length = 0;
        this.commService.getFriendsList().subscribe(res => 
        {
            friendsList = res;
            friendsList.forEach(t => 
            { this.createUser(t) });
            this.listFriends().subscribe(res=>{this.onFriendsListChanged(res)});
        },
        error => { console.log(error); });      
    }

    createUser(usr: any)
    {
        localStorage.setItem(usr.imagePath, usr.fullName);    
        var onlineStatus = usr.onlinestatus === 'offline' ? ChatParticipantStatus.Offline : ChatParticipantStatus.Online;
        var pRes: IChatParticipant = 
        {
            participantType: ChatParticipantType.User,
            id: usr.imagePath,
            displayName: usr.fullName,
            avatar: "/images/" + usr.imagePath + ".jpg",
            status: onlineStatus
        };
        this.mockedParticipants.push(pRes);
    }

    insertMessage(payload: any)
    {
        let replyMessage = new Message();
        replyMessage.message = payload.content;
        replyMessage.fromId = payload.sender;
        replyMessage.dateSent = payload.timeStamp;
        let user = this.mockedParticipants.find(x => x.id == replyMessage.fromId);
        this.onMessageReceived(user, replyMessage);
    }

    setOnlineStatus(payload: any)
    {
        let user = this.mockedParticipants.find(x => x.id == payload.imagePath);
        if(typeof user != 'undefined')
        {
            var onlineStatus = payload.onlineStatusMessage === 'online' ? ChatParticipantStatus.Online : ChatParticipantStatus.Offline;
            var pRes: IChatParticipant = 
            {
                participantType: ChatParticipantType.User,
                id: user.id,
                displayName: user.displayName,
                avatar: "/images/" + user.id + ".jpg",
                status: onlineStatus
            };
            var index = this.mockedParticipants.indexOf(user);
            this.mockedParticipants[index] = pRes;
            this.listFriends().subscribe(res=>{this.onFriendsListChanged(res)});    
        }
    }

    getMessageHistory(userId: any): Observable<Message[]>
    {
        var mockedHistory: Array<Message> = [];
        var userHistoryEntry = this.chatHistory.find(x => x.userImageID == userId);
        if (typeof userHistoryEntry === 'undefined')
        {
            var usrMsgHistory: Array<Message> = [];
            userHistoryEntry = {userImageID: userId, userMessagesHistory: []};
            //No history entry for this user so fetch history from server
            this.commService.getChatHistory(userId).subscribe(res=>
            {
                if(res.hasOwnProperty('status'))//No history found
                {
                }
                else
                {
                    res.forEach(t => 
                    { 
                        var msg = {fromId: t.fromUserID, toId: t.toUserID, message: t.text, dateSent: t.timeStamp};
                        usrMsgHistory.push(msg);
                    });
                    Array.prototype.push.apply(userHistoryEntry.userMessagesHistory, usrMsgHistory);
                    Array.prototype.push.apply(mockedHistory, usrMsgHistory);
                }
            });
            this.chatHistory.push(userHistoryEntry);
        }
        else
        {
            if(userHistoryEntry.userMessagesHistory.length > 0)
                Array.prototype.push.apply(mockedHistory, userHistoryEntry.userMessagesHistory);
        }
        console.log(mockedHistory);     
        return of(mockedHistory).pipe(delay(2000));
    }
    
    sendMessage(message: Message): void
    {
        console.log(message);
        this.wsService.sendChatMessage(message.toId, message.fromId, message.message);
    }
}