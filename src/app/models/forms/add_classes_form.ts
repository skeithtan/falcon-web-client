import { IsNotEmpty } from "class-validator";
import { computed, observable } from "mobx";
import FormClassSchedule from "../entities/form_class_schedule";

export default class AddClassesForm {
    @IsNotEmpty({
        message: "Subject is required",
    })
    @observable
    public subjectId?: number = undefined;

    @observable
    public classSchedules: FormClassSchedule[] = [];

    @computed
    get noClasses(): boolean {
        return this.classSchedules.length === 0;
    }
}