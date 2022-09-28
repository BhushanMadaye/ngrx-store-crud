import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterStoreComponent } from './counter-store/counter-store.component';
import { CrudStoreComponent } from './crud-store/crud-store.component';
import { reducers } from './core/store/reducers';
import { listReducer } from './core/store/reducers/list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterStoreComponent,
    CrudStoreComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ list: listReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
