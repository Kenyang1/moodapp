import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoodmateChatComponent } from './moodmate-chat.component';

@NgModule({
  declarations: [MoodmateChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [MoodmateChatComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoodmateChatModule {} 