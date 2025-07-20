import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspirationsPageRoutingModule } from './aspirations-routing.module';

import { AspirationsPage } from './aspirations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AspirationsPageRoutingModule
  ],
  declarations: [AspirationsPage]
})
export class AspirationsPageModule {}
