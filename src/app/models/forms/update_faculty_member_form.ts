import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumberString,
    Length,
} from "class-validator";
import { observable } from "mobx";
import * as moment from "moment";
import FacultyProfile from "../entities/faculty_profile";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import Sex from "../enums/sex";

export default class UpdateFacultyMemberForm {
    @IsNotEmpty({
        message: "First name should not be empty",
    })
    @observable
    public firstName: string = "";

    @IsNotEmpty({
        message: "Last name should not be empty",
    })
    @observable
    public lastName: string = "";

    @IsEmail(undefined, {
        message: "This is not a valid email",
    })
    @IsNotEmpty({
        message: "Email should not be empty",
    })
    @observable
    public email: string = "";

    @IsEnum(Sex)
    @IsNotEmpty({ message: "Sex is required" })
    @observable
    public sex: string = "";

    @IsEnum(FacultyMemberType)
    @IsNotEmpty({
        message: "Faculty member type is required",
    })
    @observable
    public type: string = "";

    @IsEnum(ActivityType)
    @IsNotEmpty({
        message: "Activity is required",
    })
    @observable
    public activity: string = "";

    @IsNotEmpty({
        message: "Birthdate is required",
    })
    @observable
    public birthDate: string = "";

    @IsNumberString({
        message: "Must be numbers",
    })
    @Length(3, 3, {
        message: "Must be 3 characters",
    })
    @observable
    public pnuId: string = "";

    public prefillForm(fm: FacultyProfile) {
        this.firstName = fm.firstName;
        this.lastName = fm.lastName;
        this.email = fm.email;
        this.sex = fm.sex;
        this.type = fm.type;
        this.activity = fm.activity;
        this.birthDate = fm.birthDate.format(moment.HTML5_FMT.DATE);
        this.pnuId = fm.pnuId;
    }
}
