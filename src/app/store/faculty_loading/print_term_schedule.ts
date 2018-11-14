import { observable } from "mobx";

export class PrintTermScheduleState {
    @observable
    public isShowing: boolean = false;
}

export default new PrintTermScheduleState();
