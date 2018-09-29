import { observable } from "mobx";
import FetchableStatus from "../models/enums/fetchable_status";

export default abstract class FetchableState {
    @observable
    public fetchStatus: FetchableStatus = FetchableStatus.Unfetched;

    @observable
    public fetchError?: string = undefined;
}
