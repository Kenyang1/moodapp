import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class JournalEntriesComponent {
  journalEntries: any[] = [];

  constructor(
    private modalController: ModalController
  ) {
    // For design focus, using in-memory storage only
    this.journalEntries = [];
  }

  loadJournalEntries() {
    // In-memory storage only for design focus
    this.journalEntries = [];
  }

  dismiss() {
    this.modalController.dismiss();
  }

  deleteEntry(index: number) {
    this.journalEntries.splice(index, 1);
    // No persistent storage for design focus
  }
}
