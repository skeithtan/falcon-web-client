import { observable } from "mobx";
import Entity from "../../interfaces/entity";

export default class FacultyUser extends Entity {
    @observable
    public email: string;

    @observable
    public firstName: string;

    @observable
    public lastName: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
