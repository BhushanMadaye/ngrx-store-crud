import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../core/store/actions/counter.actions';

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls: ['./counter-store.component.css']
})
export class CounterStoreComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.pipe(select('count'))
   }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(new Increment)
  }

  decrement() {
    this.store.dispatch(new Decrement)
  }

  reset() {
    this.store.dispatch(new Reset)
  }
}
