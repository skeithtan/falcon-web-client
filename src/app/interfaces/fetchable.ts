import FetchableStatus from "../models/enums/fetchable_status";

export default interface IFetchable {
    fetchStatus: FetchableStatus;
    fetchError?: string;
}
