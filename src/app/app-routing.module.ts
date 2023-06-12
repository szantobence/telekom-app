import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { catsPageGuard } from './guards/cats-page.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultPageComponent
  },
  {
    path: 'cats',
    canActivate:[catsPageGuard],
    loadChildren: () => import('./components/cats/cats.module').then(m => m.CatsModule)
  },
  {
    path: 'dogs',
    loadChildren: () => import('./components/dogs/dogs.module').then(m => m.DogsModule)
  },
  {
    path: 'mice',
    loadChildren: () => import('./components/mice/mice.module').then(m => m.MiceModule)
  },
  {
    path: '**',
    component: DefaultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
