import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSmartDivComponent } from './not-smart-div.component';

describe('NotSmartDivComponent', () => {
  let component: NotSmartDivComponent;
  let fixture: ComponentFixture<NotSmartDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSmartDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSmartDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
