// import { Component, OnInit } from '@angular/core';
// import { ChatService } from '../../services/chat.service';

// @Component({
//   selector: 'app-chat-users',
//   templateUrl: './chat-users.component.html'
// })
// export class ChatUsersComponent implements OnInit {
//   onlineUsers: string[] = [];

//   constructor(private chat: ChatService) {}

//   ngOnInit() {
//     this.chat.onlineUsers$.subscribe(users => {
//       this.onlineUsers = users;
//     });
//     this.chat.connect();
//   }
// }
