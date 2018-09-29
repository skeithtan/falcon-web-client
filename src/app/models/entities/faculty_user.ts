import { observable } from "mobx";

export default class FacultyUser {
    public id: number;

    @observable
    public email: string;

    @observable
    public firstName: string;

    @observable
    public lastName: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(plainObject: any) {
        Object.assign(this, plainObject);
    }
}
