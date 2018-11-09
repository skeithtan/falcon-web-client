import { observable } from "mobx";

export class PrintScheduleDialogState {
    @observable
    public isShowing: boolean = false;
}

export default new PrintScheduleDialogState();
