import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './cmps/heroes/heroes.component';
import { HeroDetailComponent } from './cmps/hero-detail/hero-detail.component';
import { MessagesComponent } from './cmps/system/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './cmps/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
