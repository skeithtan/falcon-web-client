import { observable } from "mobx";

export class ClassScheduleDetailsState {
    @observable
    public isShowing: boolean = false;
}

export default new ClassScheduleDetailsState();
