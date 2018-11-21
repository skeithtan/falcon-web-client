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
    public classes: FormClassSchedule[] = [];

    @computed
    get noClasses(): boolean {
        return this.classes.length === 0;
    }
}
