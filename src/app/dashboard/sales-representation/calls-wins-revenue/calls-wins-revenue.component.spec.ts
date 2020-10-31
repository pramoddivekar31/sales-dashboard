import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsWinsRevenueComponent } from './calls-wins-revenue.component';

describe('CallsWinsRevenueComponent', () => {
  let component: CallsWinsRevenueComponent;
  let fixture: ComponentFixture<CallsWinsRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsWinsRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsWinsRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
