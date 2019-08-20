import { ChatAdapter, User, Message , ChatParticipantStatus, ParticipantResponse, IChatParticipant, ChatParticipantType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Friends } from 'src/app/models/friends';

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
            var pRes: IChatParticipant = 
            {
                participantType: ChatParticipantType.User,
                id: t.imagePath,
                displayName: t.fullName,
                avatar: "/images/" + t.imagePath + ".jpg",
                status: ChatParticipantStatus.Online
            };
            this.mockedParticipants.push(pRes);           
        });
        this.listFriends().subscribe(res=>{this.onFriendsListChanged(res)});
    }

    insertMessage(userID:string, message:string)
    {
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