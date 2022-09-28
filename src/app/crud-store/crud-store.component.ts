import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItem, DeleteItem, EditItem, ListActions } from '../core/store/actions/list.actions';
import { Item } from '../core/store/reducers/list.reducer';

@Component({
  selector: 'app-crud-store',
  templateUrl: './crud-store.component.html',
  styleUrls: ['./crud-store.component.css']
})
export class CrudStoreComponent implements OnInit {
  list$: Observable<Item[]>;
  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(private store: Store<{ list: Item[] }>) { 
    // store.pipe(select('list')).subscribe(res => {
    //   console.log(res);
    // });

    this.list$ = store.select('list');
  }

  ngOnInit(): void {
  }

  addItem(item: string) {
    this.store.dispatch(new AddItem({ value: item }))

    this.itemInput.nativeElement.value = ''
    this.itemInput.nativeElement.focus();
  }

  deleteItem(index) {
    this.store.dispatch(new DeleteItem(index))
  }

  editItem(index) {
    this.store.dispatch(new EditItem(index, { value: 'edited' }))
  }

}
