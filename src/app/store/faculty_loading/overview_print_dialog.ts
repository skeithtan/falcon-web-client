import { observable } from "mobx";

export class OverviewPrintDialogState {
    @observable
    public isShowing: boolean = false;
}

export default new OverviewPrintDialogState();
