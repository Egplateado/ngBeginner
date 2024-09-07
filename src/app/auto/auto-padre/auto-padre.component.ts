import { Component } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-auto-padre',
  templateUrl: './auto-padre.component.html',
  styleUrl: './auto-padre.component.css'
})
export class AutoPadreComponent {
mostrarTitulo:string = 'HELO WORLD!';
autoLista:IAuto[] = []
}
