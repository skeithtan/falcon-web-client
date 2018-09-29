import User from "../models/entities/user";
import FetchableStatus from "../models/enums/fetchable_status";
import UserService from "../services/user";
import store from "../store";

export default () => {
    const { authentication } = store;
    authentication.fetchStatus = FetchableStatus.Fetching;

    UserService.fetchCurrentUser()
        .then((user: User) => {
            authentication.fetchStatus = FetchableStatus.Fetched;
            authentication.currentUser = user;
        })
        .catch((error: Error) => {
            authentication.fetchStatus = FetchableStatus.Error;
            authentication.fetchError = error.message;
        });
};
