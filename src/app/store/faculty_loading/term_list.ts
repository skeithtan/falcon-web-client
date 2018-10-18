import { observable } from "mobx";

export class TermListState {
    @observable
    public isShowing: boolean = false;
}

export default new TermListState();
