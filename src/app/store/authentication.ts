import { observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import User from "../models/entities/user";

export class AuthenticationState extends FetchableState {
    @observable
    public currentUser?: User = undefined;
}

export default new AuthenticationState();
