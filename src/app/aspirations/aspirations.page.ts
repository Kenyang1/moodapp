import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aspirations',
  templateUrl: './aspirations.page.html',
  styleUrls: ['./aspirations.page.scss'],
  standalone: false,
})
export class AspirationsPage implements OnInit {

  motivationalContent: any[] = [];
  aspirations: string[] = [];
  newAspirations: string = '';
  dailyMotivation: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/motivational-content.json').subscribe(data => {
      this.motivationalContent = data.motivationalContent;
      this.setDailyMotivation();
    });
  }

  setDailyMotivation() {
    if (this.motivationalContent.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.motivationalContent.length);
      this.dailyMotivation = this.motivationalContent[randomIndex];
    }
  }

  addAspirations() {
    if (this.newAspirations.trim()) {
      this.aspirations.push(this.newAspirations.trim());
      this.newAspirations = '';
    }
  }

  removeAspiration(index: number) {
    this.aspirations.splice(index, 1);
  }
}
