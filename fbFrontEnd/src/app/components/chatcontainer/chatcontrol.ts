import { ChatAdapter, User, Message , ChatParticipantStatus, ParticipantResponse, IChatParticipant, ChatParticipantType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { CommunicationService } from 'src/app/services/communication.service';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';

export class ChatControl extends ChatAdapter
{
    chatHistory: Array<any> = [];

    public commService: CommunicationService;
    public wsService: WebsocketmessagingService;
    public mockedHistory: Array<Message> = [];
    public mockedParticipants: IChatParticipant[] = 
    [
        {
            participantType: ChatParticipantType.User,
            id: 1,
            displayName: "",
            avatar: "",
            status: ChatParticipantStatus.Online
        },
    ];

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
        console.log(payload);
        let user = this.mockedParticipants.find(x => x.id == payload.imagePath);
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

    chatWindowOpen(event: any)
    {
        let userHistory = this.chatHistory.find(x => x.userID == event.id);
        if(userHistory == null)
        {
            this.commService.getChatHistory(event.id).subscribe(res=>
            {
                console.log(res);
            });
        }
    }

    getMessageHistory(userId: any): Observable<Message[]>
    {
        return of(this.mockedHistory).pipe(delay(500));
    }
    
    sendMessage(message: Message): void
    {
        this.wsService.sendChatMessage(message.toId, message.fromId, message.message);
    }
}