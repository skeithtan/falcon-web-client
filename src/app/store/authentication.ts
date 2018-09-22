import { observable } from "mobx";
import User from "../models/entities/user";
import FetchableState from "../models/enums/fetchable_state";

export class AuthenticationState {
    @observable
    public fetchState: FetchableState = FetchableState.Unfetched;

    @observable
    public currentUser?: User = undefined;

    @observable
    public fetchError?: string = undefined;
}

export default new AuthenticationState();
