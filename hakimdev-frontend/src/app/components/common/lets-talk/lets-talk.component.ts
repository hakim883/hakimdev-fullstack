// // 
// import { Component } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// @Component({
//   selector: 'app-lets-talk',
//   standalone: true,
//   imports: [HttpClientModule, FormsModule, CommonModule, TranslateModule],
//   templateUrl: './lets-talk.component.html',
//   styleUrls: ['./lets-talk.component.scss']
// })
// export class LetsTalkComponent {
//   messages: { sender: string; text: string }[] = [];
//   question = '';

//   constructor(private http: HttpClient) {}

//   send() {
//     if (!this.question.trim()) return;

//     this.http.post<any>('http://localhost:8080/api/chat', { message: this.question })
//       .subscribe({
//         next: (data) => {
//           this.messages.push({ sender: 'Vous', text: this.question });
//           this.messages.push({ sender: 'Kimi', text: data.reply });
//           this.question = '';
//         },
//         error: (err) => {
//           console.error('Erreur lors de l\'envoi du message', err);
//         }
//       });
//   }
// }






import { Component } from '@angular/core';
import { ChatKimiComponent } from '../chat-kimi/chat-kimi.component'; // ✅ importe ton composant
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.scss'],
  standalone: true,
  imports: [CommonModule, ChatKimiComponent]  // ✅ ajoute le composant ici
})
export class LetsTalkComponent {}
