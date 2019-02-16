import { observable } from "mobx";

export class PrintTermScheduleState {
    @observable
    public isShowing: boolean = false;
    
    @observable
    public courseFilter: string = "";
}

export default new PrintTermScheduleState();
