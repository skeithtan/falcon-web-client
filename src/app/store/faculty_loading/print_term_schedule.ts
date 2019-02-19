import { observable } from "mobx";

export class PrintTermScheduleState {
    @observable
    public isShowing: boolean = false;
    
    @observable
    public courseFilter: string = "";

    @observable
    public subjectFilter: string = "";
}

export default new PrintTermScheduleState();
