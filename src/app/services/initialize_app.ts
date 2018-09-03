import { User } from "../models/entities";
import { FetchableState } from "../models/enums";
import store from "../store";
import { user } from "./api";

export const initializeApp = () => {
    user.fetchCurrentUser()
        .then((u: User) => {
            store.authentication.currentUser = u;
        })
        .catch(error => {
            store.authentication.fetchState = FetchableState.Error;
            store.authentication.fetchError = [error.message];
        });
};
