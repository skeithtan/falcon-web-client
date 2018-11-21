import { observable } from "mobx";
import Entity from "../../interfaces/entity";

export default class Notice extends Entity {
    @observable
    public message: string;

    @observable
    public facultyId: number;

    @observable
    public facultyFirstName: string;

    @observable
    public facultyLastName: string;
}
