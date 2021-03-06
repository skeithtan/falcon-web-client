import { IsEnum, IsNotEmpty, IsNumberString } from "class-validator";
import { observable } from "mobx";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";

export default class AddClassForm {
    @IsEnum(MeetingDays)
    @IsNotEmpty({
        message: "Meeting days is required",
    })
    @observable
    public meetingDays: string = "";

    @IsEnum(MeetingHours)
    @IsNotEmpty({
        message: "Meeting hours is required",
    })
    @observable
    public meetingHours: string = "";

    @IsNotEmpty({
        message: "Room should not be empty",
    })
    @observable
    public room: string = "";

    @IsNotEmpty({
        message: "Course should not be empty",
    })
    @observable
    public course: string = "";

    @IsNotEmpty({
        message: "Year is required"
    })
    @observable
    public studentYear: string = "";

    @IsNotEmpty({
        message: "Section should not be empty",
    })
    @IsNumberString({
        message: "Section should be a number",
    })
    @observable
    public section: string = "";

    @observable
    public forAdjunct: boolean = false;
}
