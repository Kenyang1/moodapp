import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogJournalPage } from './log-journal.page';

describe('LogJournalPage', () => {
  let component: LogJournalPage;
  let fixture: ComponentFixture<LogJournalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
