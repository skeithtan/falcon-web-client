import { observable } from "mobx";
import FetchableStatus from "../models/enums/fetchable_status";

export default abstract class FetchableState {
    @observable
    public fetchStatus: FetchableStatus = FetchableStatus.Unfetched;

    @observable
    public fetchError?: string = undefined;

    public setStatus(newStatus: FetchableStatus, error?: string) {
        this.fetchError = undefined;
        this.fetchStatus = newStatus;

        if (this.fetchStatus === FetchableStatus.Error && error) {
            this.fetchError = error;
            console.log("An error occurred", error);
        }
    }
}
