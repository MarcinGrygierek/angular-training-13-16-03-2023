import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  value: number = 0;

  @Input()
  items: number[] = [];

  // @Output()
  // onNewValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('ON INIT!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ON CHANGES!', changes);
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY!');
  }

  // addNewValue() {
  //   this.onNewValue.emit();
  // }

}
