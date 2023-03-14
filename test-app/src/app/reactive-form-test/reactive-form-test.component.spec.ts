import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTestComponent } from './reactive-form-test.component';

describe('ReactiveFormTestComponent', () => {
  let component: ReactiveFormTestComponent;
  let fixture: ComponentFixture<ReactiveFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
