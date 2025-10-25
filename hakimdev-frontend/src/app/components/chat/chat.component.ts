// import { Component } from '@angular/core';
// import { ChatService } from '../../services/chat.service';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html'
// })
// export class ChatComponent {
//   message = '';
//   messages: any[] = [];

//   constructor(private chatService: ChatService) {
//     this.chatService.messages$.subscribe((msg: any) => {
//       if (msg) this.messages.push(msg);
//     });
    
//   }

//   sendMessage() {
//     const username = localStorage.getItem('username'); // ou via AuthService
//     this.chatService.sendMessage(username!, this.message);
//     this.message = '';
//   }
// }


import { Injectable } from '@angular/core';
import { Client, over } from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private stompClient!: Client;
  private messagesSubject = new Subject<any>();
  messages$ = this.messagesSubject.asObservable();

  connect() {
    const socket = new SockJS('http://localhost:8080/ws'); // ✅ ton endpoint websocket
    this.stompClient = over(socket);

    this.stompClient.connect({}, () => {
      console.log('✅ Connecté au WebSocket');

      // écoute des messages broadcastés
      this.stompClient.subscribe('/topic/messages', (message) => {
        if (message.body) {
          this.messagesSubject.next(JSON.parse(message.body));
        }
      });
    });
  }

  sendMessage(sender: string, content: string) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.send(
        '/app/chat.send', // ✅ correspond à @MessageMapping("/chat.send") côté Spring Boot
        {},
        JSON.stringify({ sender, content })
      );
    }
  }
}
