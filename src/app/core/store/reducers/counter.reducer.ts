import { Action } from "@ngrx/store";
import { ActionTypes } from '../actions/counter.actions';

const initialState = 0;

export const counterReducer = (state = initialState, action: Action) => {
    /** A pure function based on Actions to perform some events (Could be CRUD) */

    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;

        case ActionTypes.Decrement:
            return state - 1;

        case ActionTypes.Reset:
            return 0;

        default:
            return state;
    }
}