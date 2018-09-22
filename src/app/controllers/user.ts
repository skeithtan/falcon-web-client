import User from "../models/entities/user";
import FetchableState from "../models/enums/fetchable_state";
import { user as userAPI } from "../services";
import rootStore from "../store";

export const signIn = (email: string, password: string) => {
    const { authentication } = rootStore;
    authentication.fetchError = undefined;
    authentication.fetchState = FetchableState.Fetching;

    userAPI
        .signIn(email, password)
        .then((user: User) => {
            authentication.currentUser = user;
            authentication.fetchState = FetchableState.Fetched;
        })
        .catch((error: string) => {
            authentication.fetchState = FetchableState.Error;
            authentication.fetchError = error;
        });
};
