import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatMessagesComponent } from '../chat-messages/chat-messages.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [FormsModule, ChatMessagesComponent,NgClass],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent {
  messages = [
    { sender: 'otro', text: 'Hola, ¿cómo estás?', time: '13:40 - 12/11/24' },
    { sender: 'yo', text: 'Bien, ¿y tú?', time: '13:41 - 12/11/24' },
    { sender: 'otro', text: 'Todo bien, gracias por preguntar.', time: '13:42 - 12/11/24' }
  ];

  inputValue = '';

  handleSendMessage() {
    if (this.inputValue.trim() !== '') {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes()} - ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear().toString().slice(-2)}`;
      this.messages.push({ sender: 'yo', text: this.inputValue, time });
      this.inputValue = '';
    }
  }
}
