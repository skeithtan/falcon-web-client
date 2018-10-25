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

    public static setPassword(password: string) {
        UserService.changePassword(password)
            .then(() => {
                alert("Successfully changed the password");
            })
            .catch((e: Error) => {
                console.log("Password changing error occurred", e);
                alert("An error occurred while changing the password");
            });
    }

    public static signOut() {
        authentication.currentUser = undefined;
        authentication.fetchStatus = FetchableStatus.Unfetched;
        UserService.signOut();
    }
}
