import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent {
  @Input() messages: { sender: string, text: string, time: string }[] = [];

  // Clases para la alineación de mensajes
  getAlignmentClass(sender: string) {
    return sender === 'yo' ? 'justify-end text-right' : 'justify-start text-left';
  }

  // Clases para el estilo del mensaje
  getMessageClass(sender: string) {
    return sender === 'yo' ? "bg-[#272935] text-white" : "bg-inherit text-white";
  }
}
