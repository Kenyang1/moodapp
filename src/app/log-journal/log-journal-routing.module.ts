import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogJournalPage } from './log-journal.page';

const routes: Routes = [
  {
    path: '',
    component: LogJournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogJournalPageRoutingModule {}
