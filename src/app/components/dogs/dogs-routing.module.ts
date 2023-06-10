import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs.component';

const routes: Routes = [
  {
    path: '',
    component: DogsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
