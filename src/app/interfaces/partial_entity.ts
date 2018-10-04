import { observable } from "mobx";
import FetchableStatus from "../models/enums/fetchable_status";
import Entity from "./entity";
import IFetchable from "./fetchable";

export abstract class PartialEntity extends Entity implements IFetchable {
    @observable
    public fetchStatus: FetchableStatus = FetchableStatus.Partial;

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
