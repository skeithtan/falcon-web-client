import { IsEnum, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import Subject from "../entities/subject";
import Term from "../entities/term";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";

export default class AddClassForm {
    @observable
    public term?: Term = undefined;

    @observable
    public subject?: Subject = undefined;

    @IsEnum(MeetingDays)
    @observable
    public meetingDays: string = "";

    @IsEnum(MeetingHours)
    @observable
    public meetingHours: string = "";

    @IsNotEmpty({
        message: "Room should not be empty"
    })
    @observable
    public room: string = "";

    @IsNotEmpty({
        message: "Course should not be empty"
    })
    @observable
    public course: string = "";

    @IsNotEmpty({
        message: "Section should not be empty"
    })
    @observable
    public section: string = "";
}
