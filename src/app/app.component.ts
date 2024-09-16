import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatContainerComponent } from './components/chat-container/chat-container.component'; // Importa ChatContainerComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatContainerComponent], // Asegúrate de importar ChatContainerComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
}
