import { observable } from "mobx";
import { User } from "../models/entities";
import { FetchableState } from "../models/enums";

export class AuthenticationState {
    @observable
    public fetchState: FetchableState = FetchableState.Unfetched;

    @observable
    public currentUser?: User = undefined;

    @observable
    public fetchError?: string = undefined;
}

export default new AuthenticationState();
