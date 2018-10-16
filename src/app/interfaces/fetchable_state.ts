import { observable } from "mobx";
import FetchableStatus from "../models/enums/fetchable_status";
import IFetchable from "./fetchable";

export default abstract class FetchableState implements IFetchable {
    @observable
    public fetchStatus: FetchableStatus = FetchableStatus.Unfetched;

    @observable
    public fetchError?: string = undefined;

    public setStatus(newStatus: FetchableStatus, error?: Error) {
        this.fetchError = undefined;
        this.fetchStatus = newStatus;

        if (this.fetchStatus === FetchableStatus.Error && error) {
            this.fetchError = error.message;
            console.log("An error occurred", error);
        }
    }
}
