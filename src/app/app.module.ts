import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncAwaitDemo } from './Demos/RsjxLib/ayncAwaitDemo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginForm } from './formsExample/LoginForm.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncAwaitDemo,
    LoginForm,
    HomeComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
