import { Component, Input } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-hijo',
  templateUrl: './auto-hijo.component.html',
  styleUrl: './auto-hijo.component.css'
})
export class AutoHijoComponent {
//recibir un texto como parametro con el decorador de entrada
@Input()
titulo:string = '';
//Lista para guardar los autos nuevos
autoLista:IAuto[] = [
  {
    marca:'Omar',
    modelo:'Hola',
    precio:12
  }
];
nuevoAuto:IAuto = {
  marca: '',
  modelo: '',
  precio: 0
};
 agregarAuto(): void {
this.autoLista.push(this.nuevoAuto);
//Despues de agregar un nuevo elemento de limpia el objeto
this.nuevoAuto = 
{
  marca:'',
  modelo:'',
  precio:0
}
}
}
