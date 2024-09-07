import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoPadreComponent } from './auto-padre/auto-padre.component';
import { AutoHijoComponent } from './auto-hijo/auto-hijo.component';



@NgModule({
  declarations: [
    AutoPadreComponent,
    AutoHijoComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:
  [
    AutoPadreComponent,
    AutoHijoComponent
  ]
})
export class AutoModule { }
