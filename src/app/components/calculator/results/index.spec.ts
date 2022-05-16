import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentResultComponent } from '.';

describe('HomeComponent', () => {
  let component: InvestimentResultComponent;
  let fixture: ComponentFixture<InvestimentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
