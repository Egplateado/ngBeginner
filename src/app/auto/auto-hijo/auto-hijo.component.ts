import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auto-hijo',
  templateUrl: './auto-hijo.component.html',
  styleUrl: './auto-hijo.component.css'
})
export class AutoHijoComponent {
//recibir un texto como parametro con el decorador de entrada
@Input()
titulo:string = '';
}
