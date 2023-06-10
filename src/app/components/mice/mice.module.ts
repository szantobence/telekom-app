import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiceComponent } from './mice.component';
import { MiceRoutinModule } from './mice-routing.module';



@NgModule({
  declarations: [
    MiceComponent
  ],
  imports: [
    CommonModule,
    MiceRoutinModule
  ]
})
export class MiceModule { }
