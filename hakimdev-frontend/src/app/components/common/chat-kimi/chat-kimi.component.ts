// import { Component } from '@angular/core';
// import { HttpClientModule,HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common'; // ✅ ajoute ici

// @Component({
//   selector: 'app-chat-kimi',
//   standalone: true,
//   imports: [HttpClientModule, FormsModule,CommonModule],
//   templateUrl: './chat-kimi.component.html',
//   styleUrls: ['./chat-kimi.component.scss']
// })
// export class ChatKimiComponent {
//   messages: { sender: string; text: string }[] = [];
//   question = '';

//   constructor(private http: HttpClient) {}

//   send() {
//     if (!this.question.trim()) return;

//     this.messages.push({ sender: 'Vous', text: this.question });

//     // Appel à ton backend (ou API proxy vers Kimi)
//     this.http.post<any>('http://localhost:8080/api/chat', { message: this.question })
//       .subscribe(res => {
//         this.messages.push({ sender: 'Kimi', text: res.reply });
//       });

//     this.question = '';
//   }
// }




import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chat-kimi',
  templateUrl: './chat-kimi.component.html',
  styleUrls: ['./chat-kimi.component.css'],  // ✅ PAS d’extension bizarre
  standalone: true ,
  imports: [CommonModule, FormsModule]
})
export class ChatKimiComponent implements OnInit {
  message = '';
  username: string = '';
  messages: { sender: string, content: string }[] = [];
  users: { username: string, online: boolean }[] = []; // ✅ liste des utilisateurs

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Charger la liste des utilisateurs depuis le backend
    this.chatService.getUsers().subscribe(
      (res: any[]) => {
        this.users = res;
      },
      (err: any) => {
        console.error(err);
      }
    );
    

    // S’abonner aux messages entrants (websocket)
    this.chatService.messages$.subscribe((msg: any) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    if (this.message.trim() === '') return;
    this.chatService.sendMessage(this.username, this.message);
    this.message = '';
  }
}
