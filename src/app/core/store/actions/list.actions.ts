import { Action } from '@ngrx/store'

export enum ListActions {
    AddItem = 'AddItem',
    EditItem = 'EditItem',
    GetItem = 'GetItem',
    DeleteItem = 'DeleteItem',
}

export class AddItem implements Action {
    readonly type: string = ListActions.AddItem;

    constructor(public payload: { value: string }) {}
}

export class EditItem implements Action {
    readonly type: string = ListActions.EditItem;

    constructor(public index: number, public payload: { value: string }) {}
}

export class GetItem implements Action {
    readonly type: string = ListActions.GetItem;
}

export class DeleteItem implements Action {
    readonly type: string = ListActions.DeleteItem;

    constructor(public index: number) {}
}