import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AspirationsPageRoutingModule } from './aspirations-routing.module';

import { AspirationsPage } from './aspirations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    AspirationsPageRoutingModule
  ],
  declarations: [AspirationsPage]
})
export class AspirationsPageModule {}
