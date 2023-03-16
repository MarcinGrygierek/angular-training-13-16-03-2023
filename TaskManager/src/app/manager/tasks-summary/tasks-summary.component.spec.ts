import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleTask, TaskStatus } from '../types/task';

import { TasksSummaryComponent } from './tasks-summary.component';

describe('TasksSummaryComponent', () => {
  let component: TasksSummaryComponent;
  let fixture: ComponentFixture<TasksSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate summary', () => {
    const tasks: SingleTask[] = [
      {
        id: '1',
        name: 'a',
        createdAt: new Date(),
        status: TaskStatus.Done,
        hidden: false
      },
      {
        id: '2',
        name: 'a',
        createdAt: new Date(),
        status: TaskStatus.New,
        hidden: false
      },
      {
        id: '1',
        name: 'a',
        createdAt: new Date(),
        status: TaskStatus.InProgress,
        hidden: true
      }
    ]

    component.getTasksSummary(tasks);

    expect(component.tasksDeleted).toEqual(1);
    expect(component.tasksDone).toEqual(1);
    expect(component.tasksNew).toEqual(1);
    expect(component.tasksInProgress).toEqual(0);
    expect(component.tasksTotal).toEqual(3);
  })
});
