import { observable } from "mobx";

export class AutoAssignWizardState {
    @observable
    public isShowing: boolean = false;
}

export default new AutoAssignWizardState();
