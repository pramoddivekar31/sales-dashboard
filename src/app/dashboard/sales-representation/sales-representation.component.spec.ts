import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepresentationComponent } from './sales-representation.component';

describe('SalesRepresentationComponent', () => {
  let component: SalesRepresentationComponent;
  let fixture: ComponentFixture<SalesRepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
