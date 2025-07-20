import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-aspirations',
  templateUrl: './aspirations.page.html',
  styleUrls: ['./aspirations.page.scss'],
  standalone: false,
})
export class AspirationsPage implements OnInit {

  aspirations: string[] = [];
  newAspirations: string = '';

  addAspirations() {
    this.aspirations.push(this.newAspirations);
    this.storageService.setItem('aspirations', this.aspirations);
  }

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

}
