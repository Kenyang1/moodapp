import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AspirationsPage } from './aspirations.page';

describe('AspirationsPage', () => {
  let component: AspirationsPage;
  let fixture: ComponentFixture<AspirationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
