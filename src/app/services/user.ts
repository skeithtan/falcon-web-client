import axios, { AxiosError, AxiosResponse } from "axios";
import User from "../models/entities/user";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class UserService {
    public static async fetchCurrentUser(): Promise<User | undefined> {
        return axios
            .get("/current-user")
            .then((response: AxiosResponse<any>) => new User(response.data))
            .catch((error: AxiosError) => {
                // If server throws 401, it most likely means no signed in user
                if (error.response && error.response.status === 401) {
                    return undefined;
                }

                throw handleAxiosError(error);
            });
    }

    public static async signIn(email: string, password: string): Promise<User> {
        return axios
            .post("/sign-in", { email, password })
            .then((response: AxiosResponse<any>) => new User(response.data))
            .catch((error: AxiosError) => {
                // Check if invalid credentials
                // handleAxiosError will not throw a description for this
                if (error.response && error.response.status === 401) {
                    throw new Error("Invalid credentials");
                }

                throw handleAxiosError(error);
            });
    }

    public static async signOut(): Promise<AxiosResponse> {
        return axios.post("/sign-out");
    }
}
