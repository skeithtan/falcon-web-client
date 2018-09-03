import axios, { AxiosResponse } from "axios";
import { User } from "../../models/entities/index";

const transformResponseToUser = (response: AxiosResponse<any>) => {
    const user = new User();
    user.firstName = response.data.firstName;
    user.lastName = response.data.lastName;
    user.email = response.data.email;
    user.passwordIsTemporary = response.data.passwordIsTemporary;
    user.authorization = response.data.authorization;
    return user;
};

export const fetchCurrentUser = (): Promise<User | void> =>
    axios.get("/current-user").then(transformResponseToUser);

export const signIn = (email: string, password: string): Promise<User | void> =>
    axios.post("/sign-in", { email, password }).then(transformResponseToUser);

export const signOut = (): Promise<AxiosResponse> => axios.post("/sign-out");
