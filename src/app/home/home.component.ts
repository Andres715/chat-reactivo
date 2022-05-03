import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:string = "";

  public messages:any = [];
  public messagesInOrden:any = [];

  public messageJSON:any = {};
  public message:string = "";

  public contador:number = 0;
  

  constructor() { }

  ngOnInit(): void {
    //this.ingresarNombre();
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
    this.messageJSON.user = this.user + " " + this.contador;
    this.messageJSON.message = this.message;

    this.messagesInOrden.push(this.messageJSON);

    this.messages = [];

    for(let i = this.messagesInOrden.length; i > 0; i--){
      this.messages.push(this.messagesInOrden[i - 1]);
    }

    this.contador++;
    this.message = "";
    this.messageJSON = {};
  }

}
