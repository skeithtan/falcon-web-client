import User from "../models/entities/user";
import FetchableStatus from "../models/enums/fetchable_status";
import UserService from "../services/user";
import rootStore from "../store";

const { authentication } = rootStore;

export default class UserController {
    public static signIn(email: string, password: string) {
        authentication.fetchError = undefined;
        authentication.fetchStatus = FetchableStatus.Fetching;

        UserService.signIn(email, password)
            .then((user: User) => {
                authentication.currentUser = user;
                authentication.fetchStatus = FetchableStatus.Fetched;
            })
            .catch((e: Error) => {
                authentication.fetchStatus = FetchableStatus.Error;
                authentication.fetchError = e.message;
            });
    }
}
