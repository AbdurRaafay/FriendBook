import { ChatAdapter, User, Message , ChatParticipantStatus, ParticipantResponse, IChatParticipant, ChatParticipantType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

export class ChatControl extends ChatAdapter
{
    public mockedHistory: Array<Message> = [];

    public callHome: any;
    public mockedParticipants: IChatParticipant[] = 
    [
        {
            participantType: ChatParticipantType.User,
            id: 1,
            displayName: "Arya Stark",
            avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
            status: ChatParticipantStatus.Online
        },
    ];

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

    public setFriendsList(frnds: any): void
    {
        this.mockedParticipants.length = 0;
        frnds.forEach(t => 
        {
            // console.log(t);
            var onlineStatus = t.onlinestatus === 'offline' ? ChatParticipantStatus.Offline : ChatParticipantStatus.Online;
            var pRes: IChatParticipant = 
            {
                participantType: ChatParticipantType.User,
                id: t.imagePath,
                displayName: t.fullName,
                avatar: "/images/" + t.imagePath + ".jpg",
                status: onlineStatus
            };
            this.mockedParticipants.push(pRes);           
        });
        this.listFriends().subscribe(res=>{this.onFriendsListChanged(res)});
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

    getMessageHistory(userId: any): Observable<Message[]>
    {
        return of(this.mockedHistory).pipe(delay(500));
    }
    
    sendMessage(message: Message): void
    {
        this.callHome(message.toId, message.fromId, message.message);
    }
}