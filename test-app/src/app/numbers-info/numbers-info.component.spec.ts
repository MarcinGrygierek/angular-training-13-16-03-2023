import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersInfoComponent } from './numbers-info.component';

describe('NumbersInfoComponent', () => {
  let component: NumbersInfoComponent;
  let fixture: ComponentFixture<NumbersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
