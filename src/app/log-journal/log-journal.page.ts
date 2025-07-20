import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { JournalEntriesComponent } from '../journal-entries/journal-entries.component';

@Component({
  selector: 'app-log-journal',
  templateUrl: './log-journal.page.html',
  styleUrls: ['./log-journal.page.scss'],
  standalone: false,
})
export class LogJournalPage implements OnInit {

  selectedMood: string = '';
  journalEntries: any[] = [];

  constructor(
    private storageService: StorageService, 
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadJournalEntries();
  }

  addJournalEntry() {
    // Add journal entry logic here
    console.log('Adding journal entry with mood:', this.selectedMood);
  }

  loadJournalEntries() {
    this.journalEntries = this.storageService.getItem<any[]>('journalEntries') || [];
  }

  async viewJournal() {
    const modal = await this.modalController.create({
      component: JournalEntriesComponent
    });
    return await modal.present();
  }
}
