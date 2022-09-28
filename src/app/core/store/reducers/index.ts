import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "../reducers/counter.reducer";
import { listReducer } from "../reducers/list.reducer";

export const reducers: ActionReducerMap<any> = {
  counterState: counterReducer,
  listState: listReducer
};
