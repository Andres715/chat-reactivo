import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats:any = [];

  constructor(private socket:SocketService) {

    this.onReceiveMessage();
    this.loadMessages();
    
  }

  onStartChat(){
    this.socket.io.emit("onStartChat");
  }

  loadMessages(){
    this.socket.io.on("loadMessages", (messages) => {
      this.chats = messages;
    });
  }

  sendMessage(messageInfo:any){
    //this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage", messageInfo);
  }

  onReceiveMessage(){
      this.socket.io.on("receiveMessage", (messageInfo:any) => {
        this.chats.splice(0, 0, messageInfo);
    });
  }

}
