import { observable } from "mobx";
import { UserType } from "../enums";

export default class User {
    @observable
    public firstName: string;

    @observable
    public lastName: string;

    @observable
    public email: string;

    @observable
    public authorization: UserType;

    @observable
    public passwordIsTemporary: boolean;
}
