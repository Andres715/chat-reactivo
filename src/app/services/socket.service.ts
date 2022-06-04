import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  io = io("https://socket-progra.herokuapp.com/", {
    withCredentials: true,
    autoConnect: true
  });

  constructor() {

    /*
    this.io.emit("test", "hola mundo");

    this.io.on("test2", (text) => {
      alert("test 2: " + text);
    });
    */

  }
}
