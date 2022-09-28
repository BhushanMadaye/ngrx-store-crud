import { Action, State } from "@ngrx/store";
import { ListActions } from "../actions/list.actions";

export interface Item {
    value?: string
}

let initialList: Item[] = [];

export const listReducer = (state: Item[], action: Action) => {
    switch (action.type) {
        case ListActions.AddItem:
            return AddItem(state, action);

        case ListActions.DeleteItem:
            return DeleteItem(state, action)

            case ListActions.EditItem:
            return EditItem(state, action)

        default:
            return state;
    }
}

const AddItem = (state: Item[] = [], action: any): Item[] => {

    return [
        ...state,
        action.payload
    ];
}

const DeleteItem = (state: Item[], action: any) => {
    return state.filter((item, index) => index !== action.index)
}

const EditItem = (state: Item[], action: any) => {
    return state.map((item,index) => index === action.index ? { value: action.payload.value } : {...item}) 
}