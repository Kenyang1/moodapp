import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  emotions = [
    { name: 'Happy', icon: '😊', color: '#FFD700', bgColor: '#FFF8DC' },
    { name: 'Sad', icon: '😢', color: '#87CEEB', bgColor: '#E6F3FF' },
    { name: 'Angry', icon: '😠', color: '#FF6B6B', bgColor: '#FFE6E6' },
    { name: 'Excited', icon: '🤩', color: '#FF69B4', bgColor: '#FFE6F2' },
    { name: 'Calm', icon: '😌', color: '#98FB98', bgColor: '#F0FFF0' },
    { name: 'Anxious', icon: '😰', color: '#DDA0DD', bgColor: '#F8F0FF' }
  ];

  promotionalImg = [
    {
      img: 'assets/images/promoImg1.png',
      title: 'MoodMate AI',
      description: 'Your personal mood coach'
    },
    {
      img: 'assets/images/promoImg2.png',
      title: 'MoodMate AI',
      description: 'Your personal mood coach'
    },
  ]

  swiperOptions = {
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: false,
    loop: false
  };
recentEntries: any;

  constructor() {}
}
