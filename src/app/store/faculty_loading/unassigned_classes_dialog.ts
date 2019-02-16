import { observable } from "mobx";

export class UnassignedClassesDialogState {
    @observable
    public isShowing: boolean = false;
}

export default new UnassignedClassesDialogState();
