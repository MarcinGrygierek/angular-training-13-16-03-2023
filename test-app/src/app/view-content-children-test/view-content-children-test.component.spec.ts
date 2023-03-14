import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentChildrenTestComponent } from './view-content-children-test.component';

describe('ViewContentChildrenTestComponent', () => {
  let component: ViewContentChildrenTestComponent;
  let fixture: ComponentFixture<ViewContentChildrenTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContentChildrenTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContentChildrenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
