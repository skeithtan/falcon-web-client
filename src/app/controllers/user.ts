import User from "../models/entities/user";
import FetchableState from "../models/enums/fetchable_state";
import  * as userAPI from "../services/user";
import rootStore from "../store";

export default class UserController {
    public static signIn(email: string, password: string) {
        const { authentication } = rootStore;
        authentication.fetchError = undefined;
        authentication.fetchState = FetchableState.Fetching;

        userAPI
            .signIn(email, password)
            .then((user: User) => {
                authentication.currentUser = user;
                authentication.fetchState = FetchableState.Fetched;
            })
            .catch((e: Error) => {
                authentication.fetchState = FetchableState.Error;
                authentication.fetchError = e.message;
            });
    }
}
