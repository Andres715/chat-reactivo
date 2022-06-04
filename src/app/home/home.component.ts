import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:string = "";

  public messagesInOrden:any = [];

  public messageJSON:any = {};
  public message:string = "";

  constructor(private chat:ChatService) {
    
  }

  ngOnInit(): void {
    this.chat.onStartChat();
    setTimeout(() => {
      this.messagesInOrden = this.chat.chats;
    }, 500);
  }

  enter(){
    let backdrop = document.getElementById("backdrop");
    let modal = document.getElementById("modal");

    if(!this.user){
      alert("Ingresa un user valido");
    } else if(backdrop && modal){
      backdrop.style.display = "none";
      modal.style.display = "none";
    }

  }

  sendMessage(){
    this.messageJSON.user = this.user;
    this.messageJSON.message = this.message;

    this.chat.sendMessage(this.messageJSON);

    this.messagesInOrden = this.chat.chats;

    this.message = "";
    this.messageJSON = {};
  }

}
