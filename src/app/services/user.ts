import axios, { AxiosError, AxiosResponse } from "axios";
import User from "../models/entities/user";

const transformResponseToUser = (response: AxiosResponse<any>): User => {
    const user = new User();
    Object.assign(user, response.data);
    return user;
};

const transformErrorToString = (error: AxiosError) => {
    if (error.response && error.response.data.message) {
        throw error.response.data.message;
    }

    throw error.message;
};

export const fetchCurrentUser = (): Promise<User | undefined> =>
    axios
        .get("/current-user")
        .then(transformResponseToUser)
        .catch((error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                return undefined;
            }

            throw transformErrorToString(error);
        });

export const signIn = (email: string, password: string): Promise<User | void> =>
    axios
        .post("/sign-in", { email, password })
        .then(transformResponseToUser)
        .catch(transformErrorToString);

export const signOut = (): Promise<AxiosResponse> => axios.post("/sign-out");
