import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { MensagemModule } from './../components/mensagem/mensagem.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule],
  exports: [HomeComponent],
})
export class HomeModule {}
