import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooService } from '../foo.service';

import { FooComponent } from './foo.component';

class MockFooService {
  constructor() {}

  getValue() {
    return 1234
  }
}

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooComponent ],
      providers: [
        { provide: FooService, useClass: MockFooService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render value 1234', () => {
    expect(component.data).toBe(1234);
  })
});
