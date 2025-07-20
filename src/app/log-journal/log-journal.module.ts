import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogJournalPageRoutingModule } from './log-journal-routing.module';

import { LogJournalPage } from './log-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogJournalPageRoutingModule
  ],
  declarations: [LogJournalPage]
})
export class LogJournalPageModule {}
