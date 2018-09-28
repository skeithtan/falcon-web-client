import User from "../models/entities/user";
import FetchableState from "../models/enums/fetchable_state";
import UserService from "../services/user";
import rootStore from "../store";

const { authentication } = rootStore;

export default class UserController {
    public static signIn(email: string, password: string) {
        authentication.fetchError = undefined;
        authentication.fetchState = FetchableState.Fetching;

        UserService.signIn(email, password)
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
