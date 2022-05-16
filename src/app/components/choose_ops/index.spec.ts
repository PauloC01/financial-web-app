import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOpsComponent } from '.';

describe('HomeComponent', () => {
  let component: ChooseOpsComponent;
  let fixture: ComponentFixture<ChooseOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
