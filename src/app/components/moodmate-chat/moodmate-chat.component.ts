import { Component, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MoodmatePopoverComponent } from '../moodmate-popover/moodmate-popover.component';

@Component({
  selector: 'app-moodmate-chat',
  templateUrl: './moodmate-chat.component.html',
  styleUrls: ['./moodmate-chat.component.scss'],
  standalone: false
})
export class MoodmateChatComponent {
  @Input() moodmateName: string = 'Buddy';
  @Input() moodmateType: string = 'dog';
  
  Object = Object; // Make Object available in template
  
  messages: any[] = [];

  avatars: { [key: string]: string } = {
    dog: '🐕',
    cat: '🐱',
    bird: '🐦',
    rabbit: '🐰',
    fish: '🐠',
    hedgehog: '🦔'
  };

  newMessage: string = '';

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController
  ) {
    // Initialize with welcome message
    this.messages = [
      {
        id: 1,
        type: 'moodmate',
        content: 'Hi there! I\'m your moodmate. How are you feeling today?',
        timestamp: new Date(),
        avatar: this.getMoodmateAvatar()
      }
    ];
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user message
    this.messages.push({
      id: this.messages.length + 1,
      type: 'user',
      content: this.newMessage,
      timestamp: new Date(),
      avatar: '👤'
    });

    // Clear input
    this.newMessage = '';

    // Simulate moodmate response (dummy)
    setTimeout(() => {
      this.messages.push({
        id: this.messages.length + 1,
        type: 'moodmate',
        content: 'That\'s interesting! Tell me more about how you\'re feeling.',
        timestamp: new Date(),
        avatar: this.getMoodmateAvatar()
      });
    }, 1000);
  }

  closeChat() {
    this.modalController.dismiss();
  }

  getMoodmateAvatar(): string {
    const avatars: { [key: string]: string } = {
      dog: '🐕',
      cat: '🐱',
      bird: '🐦',
      rabbit: '🐰',
      fish: '🐠',
      hedgehog: '🦔'
    };
    return avatars[this.moodmateType] || '🐕';
  }

  async presentMoodmatePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MoodmatePopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'moodmate-popover',
      side: 'bottom',
      alignment: 'end',
      size: 'auto'
    });
    
    const result = await popover.present();
    
    popover.onDidDismiss().then((data) => {
      if (data.data && data.data.selectedType) {
        this.moodmateType = data.data.selectedType;
        this.moodmateName = this.getMoodmateName(data.data.selectedType);
        
        // Update all existing moodmate messages with new avatar
        this.messages.forEach(message => {
          if (message.type === 'moodmate') {
            message.avatar = this.getMoodmateAvatar();
          }
        });
      }
    });
    
    return result;
  }

  getMoodmateName(type: string): string {
    const names: { [key: string]: string } = {
      dog: 'Buddy',
      cat: 'Whiskers',
      bird: 'Tweetie',
      rabbit: 'Hopper',
      fish: 'Splash',
      hedgehog: 'Spike'
    };
    return names[type] || 'Buddy';
  }
} 