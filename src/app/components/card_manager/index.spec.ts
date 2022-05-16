import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitManagerComponent } from '.';

describe('HomeComponent', () => {
  let component: LimitManagerComponent;
  let fixture: ComponentFixture<LimitManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
