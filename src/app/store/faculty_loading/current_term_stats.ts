import { observable } from "mobx";
import FetchableState from "../../interfaces/fetchable_state";

export class CurrentTermStatsState extends FetchableState {
    @observable
    public stats: { [key: string]: any };
}

export default new CurrentTermStatsState();
