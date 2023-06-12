import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { navigationReducer } from './store/reducers/navigation.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      navigation: navigationReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
