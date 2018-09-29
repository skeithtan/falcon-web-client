import { AxiosError } from "axios";
import FetchableStatus from "../models/enums/fetchable_status";
import rootStore from "../store/index";

export const handleAxiosError = (error: AxiosError) => {
    if (!error.response) {
        throw error;
    }

    // If server doesn't find JWT valid or it is expired, sign out
    if (error.response.status === 401) {
        rootStore.authentication.currentUser = undefined;
        rootStore.authentication.fetchStatus = FetchableStatus.Unfetched;
        throw error;
    }

    const responseData = error.response.data;

    // If the API has a custom error message, throw with that message
    if (responseData && responseData.message) {
        throw new Error(responseData.message);
    }

    throw error;
};
