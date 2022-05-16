import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCalculateComponent } from '.';

describe('HomeComponent', () => {
  let component: InvestCalculateComponent;
  let fixture: ComponentFixture<InvestCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestCalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
