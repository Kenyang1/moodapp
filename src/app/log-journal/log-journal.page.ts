import { Component } from '@angular/core';
import { JournalEntriesComponent } from '../journal-entries/journal-entries.component';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

interface JournalEntry {
  mood: string;
  entry: string;
  date: string;
}

@Component({
  selector: 'app-log-journal',
  templateUrl: './log-journal.page.html',
  styleUrls: ['./log-journal.page.scss'],
  standalone: false,
})
export class LogJournalPage {
  journalEntry = '';
  selectedMood = '';
  journalEntries: JournalEntry[] = [];
  
  constructor(
    private modalController: ModalController,
    private storageService: StorageService,
    private toastController: ToastController
  ) {
    this.loadEntries();
  }

  async saveEntry() {
    // Check for empty mood
    if (!this.selectedMood) {
      await this.showToast('Please select a mood', 'warning');
      return;
    }

    // Check for empty journal entry
    if (!this.journalEntry.trim()) {
      await this.showToast('Please write your journal entry', 'warning');
      return;
    }

    const entry: JournalEntry = {
      mood: this.selectedMood,
      entry: this.journalEntry.trim(),
      date: new Date().toISOString()
    };

    try {
      // Add to local array
      this.journalEntries.push(entry);
      
      // Save to localStorage
      this.storageService.setItem('journalEntries', this.journalEntries);

      // Clear form
    this.journalEntry = '';
      this.selectedMood = '';
      
      // Show success message
      await this.showToast('Journal entry saved successfully!', 'success');
      console.log('Entry saved successfully');
    } catch (error) {
      console.error('Error saving entry:', error);
      await this.showToast('Error saving entry. Please try again.', 'danger');
    }
  }

  async deleteEntry(index: number) {
    try {
      this.journalEntries.splice(index, 1);
      this.storageService.setItem('journalEntries', this.journalEntries);
      await this.showToast('Entry deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting entry:', error);
      await this.showToast('Error deleting entry. Please try again.', 'danger');
    }
  }

  getMoodEmoji(mood: string): string {
    const moodEmojis: { [key: string]: string } = {
      'happy': '',
      'sad': '',
      'angry': '',
      'anxious': '😰',
      'grateful': '',
      'excited': '🎉',
      'calm': ''
    };
    return moodEmojis[mood] || '😊';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  async showToast(message: string, color: 'success' | 'warning' | 'danger' = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
      buttons: [
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  loadEntries() {
    try {
      const savedEntries = this.storageService.getItem<JournalEntry[]>('journalEntries');
      if (savedEntries) {
        this.journalEntries = savedEntries;
      }
    } catch (error) {
      console.error('Error loading entries:', error);
    }
  }
}
