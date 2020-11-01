import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticCardsComponent } from './statistic-cards.component';

describe('StatisticCardsComponent', () => {
  let component: StatisticCardsComponent;
  let fixture: ComponentFixture<StatisticCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
