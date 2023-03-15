import { Component, OnInit } from '@angular/core';
import { delay, endWith, filter, from, interval, map, merge, mergeMap, Observable, of, scan, startWith, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  // this.handlePromise();
  // this.handleObservable();
  // this.handleMultiObservable();
  // this.handleOfAndFrom();
    // this.handleTakeTakeUntil();
    this.handleFakeAPI();
  }

  handleFakeAPI() {
    const userIDs = [1, 2, 3, 4, 5, 6];

    from(userIDs)
    .pipe(
      map(val => of(val)
        .pipe(
          delay(Math.round(Math.random() * 2000 + 1000)),
          map(val => ({
            id: val,
            name: 'Marcin',
            surname: 'Grygierek'
          })
        )
       )
      ),
      mergeMap(val => val)
    )
    .subscribe(val => {
      console.log(val);
    })
  }

  handleTakeTakeUntil() {
    const arr = [1, 2, 3, 4, 5, 6];

    from(arr)
      .pipe(
        take(2)
      )
      .subscribe(val => {
        console.log(val);
      })

    interval(500)
      .pipe(
        startWith(1000),
        takeUntil(timer(2500)),
        endWith(10000)
      )
      .subscribe(val => {
        console.log(val);
      })
  }

  handleOfAndFrom() {
    of(10, 20, 30, 40, 50).subscribe(val => {
      console.log("OF", val);
    })

    from([10, 20, 30, 40, 50]).subscribe(val => {
      console.log('FROM', val);
    })

    const arr = [1, 2, 3, 4, 5];
    const squares = arr.map(val => val ** 2);
    const odds = arr.filter(val => val % 2 === 1);
    const sum = arr.reduce((acc, curr) => acc + curr);
    console.log(squares, odds, sum);

    from(arr)
      .pipe(
        map(val => val ** 2)
      )
      .subscribe(val => {
        console.log(val);
      })

    from(arr)
      .pipe(
        filter(val => val % 2 === 1 )
      )
      .subscribe(val => {
        console.log(val);
      })

    from(arr)
      .pipe(
        scan((acc, curr) => acc + curr)
      )
      .subscribe(val => {
        console.log(val);
      })
  }

  handleMultiObservable() {
    const observable = new Observable(observer => {
      let counter = 0;

      const intervalId = setInterval(() => {
        observer.next(counter);
        counter++;
      }, 500)

      return {
        unsubscribe: () => {
          console.log('Deleting subscription');
          clearInterval(intervalId);
        }
      }
    });

    const subscription1 = observable.subscribe(val => {
      console.log(val);
    })

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 5000);
    
    setTimeout(() => {
      const subscription2 = observable.subscribe(val => {
        console.log(val);
      })
      setTimeout(() => {
        subscription2.unsubscribe();
      }, 3000);
    }, 2000)
    
  }

  handleObservable() {
    const observable = new Observable((observer) => {
      setInterval(() => {
        observer.next('Sukces Observable')
      }, 5000)
    })

    setTimeout(() => {
      observable.subscribe(val => {
        console.log(val);
      })
    }, 2000)
   
  }

  async handlePromise() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Sukces Promise');
      }, 5000);
    })

    setTimeout(async () => {
      const result = await promise;
      console.log(result);
    }, 2000)
   
  }
}
