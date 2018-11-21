import { observable } from "mobx";
import ClassSchedule from "../entities/class_schedule";

export default class AddClassesForm {
    @observable
    public subjectId?: number = undefined;

    @observable
    public mondayThursdayClasses: ClassSchedule[] = [];

    @observable
    public tuesdayFridayClasses: ClassSchedule[] = [];
}
