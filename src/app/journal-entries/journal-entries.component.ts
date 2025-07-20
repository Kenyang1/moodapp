import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
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
    private modalController: ModalController,
    private storageService: StorageService
  ) {
    this.loadJournalEntries();
  }

  loadJournalEntries() {
    this.journalEntries = this.storageService.getItem<any[]>('journalEntries') || [];
  }

  dismiss() {
    this.modalController.dismiss();
  }

  deleteEntry(index: number) {
    this.journalEntries.splice(index, 1);
    this.storageService.setItem('journalEntries', this.journalEntries);
  }
}
