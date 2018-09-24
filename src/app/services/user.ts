import axios, { AxiosError, AxiosResponse } from "axios";
import User from "../models/entities/user";
import { handleAxiosError } from "../utils/handle_axios_error";

const transformResponseToUser = (response: AxiosResponse<any>): User => {
    const user = new User();
    Object.assign(user, response.data);
    return user;
};

export const fetchCurrentUser = (): Promise<User | undefined> =>
    axios
        .get("/current-user")
        .then(transformResponseToUser)
        .catch((error: AxiosError) => {
            // If server throws 401, it most likely means no signed in user
            if (error.response && error.response.status === 401) {
                return undefined;
            }

            throw handleAxiosError(error);
        });

export const signIn = (email: string, password: string): Promise<User> =>
    axios
        .post("/sign-in", { email, password })
        .then(transformResponseToUser)
        .catch((error: AxiosError) => {
            // Check if invalid credentials
            // handleAxiosError will not throw a description for this
            if (error.response && error.response.status === 401) {
                throw new Error("Invalid credentials");
            }

            throw handleAxiosError(error);
        });

export const signOut = (): Promise<AxiosResponse> => axios.post("/sign-out");
