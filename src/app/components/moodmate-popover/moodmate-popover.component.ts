import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-moodmate-popover',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card class="moodmate-selection-card">
      <ion-card-header>
        <ion-card-title>Choose your moodmate</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div class="moodmate-grid">
          <div 
            *ngFor="let type of Object.keys(avatars)" 
            class="moodmate-option"
            (click)="selectMoodmate(type)">
            <div class="moodmate-avatar">{{avatars[type]}}</div>
            <div class="moodmate-name">{{type | titlecase}}</div>
          </div>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .moodmate-selection-card {
      margin: 1rem;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      max-width: 320px;
      min-width: 280px;
    }
    
    .moodmate-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
      padding: 1rem;
    }
    
    .moodmate-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8rem;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(14, 107, 168, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(14, 107, 168, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(14, 107, 168, 0.2);
      }
    }
    
    .moodmate-avatar {
      font-size: 2rem;
      margin-bottom: 0.4rem;
    }
    
    .moodmate-name {
      font-size: 0.8rem;
      font-weight: 600;
      color: #001c55ff;
      text-align: center;
    }
    
    ion-card-header {
      padding: 1rem 1rem 0.5rem 1rem;
    }
    
    ion-card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #001c55ff;
      text-align: center;
    }
    
    ion-card-content {
      padding: 0.5rem 1rem 1rem 1rem;
    }
  `]
})
export class MoodmatePopoverComponent {
  Object = Object;
  
  avatars: { [key: string]: string } = {
    dog: '🐕',
    cat: '🐱',
    bird: '🐦',
    rabbit: '🐰',
    fish: '🐠',
    hedgehog: '🦔'
  };

  constructor(private popoverController: PopoverController) {}

  selectMoodmate(type: string) {
    this.popoverController.dismiss({ selectedType: type });
  }
} 