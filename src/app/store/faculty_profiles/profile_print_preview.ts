import { observable } from "mobx";

export class ProfilePrintPreviewState {
    @observable
    public isShowing: boolean = false;

    @observable
    public withDegrees: boolean = true;

    @observable
    public withRecognitions: boolean = true;

    @observable
    public withPresentations: boolean = true;

    @observable
    public withInstructionalMaterials: boolean = true;

    @observable
    public withExtensionWorks: boolean = true;

    public resetAndClose() {
        this.isShowing = false;
        this.withDegrees = true;
        this.withRecognitions = true;
        this.withPresentations = true;
        this.withInstructionalMaterials = true;
        this.withExtensionWorks = true;
    }
}

export default new ProfilePrintPreviewState();
