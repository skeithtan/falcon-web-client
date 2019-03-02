import { observable } from "mobx";

export class PrintTermScheduleState {
    @observable
    public isShowing: boolean = false;

    @observable
    public yearFilter: number = 0;
    
    @observable
    public courseFilter: string = "";

    @observable
    public subjectFilter: string = "";

    @observable
    public adjunctFilter: boolean = false;
}

export default new PrintTermScheduleState();
