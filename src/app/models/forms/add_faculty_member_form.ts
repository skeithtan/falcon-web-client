import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";
import { observable } from "mobx";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import Sex from "../enums/sex";

export default class AddFacultyMemberForm {
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

    @IsNotEmpty()
    @MinLength(10)
    @observable
    public password: string = Math.random()
        .toString(36)
        .substring(3);

    @IsEnum(Sex)
    @IsNotEmpty({
        message: "Sex is required",
    })
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
        message: "Birthdate is required"
    })
    @observable
    public birthDate: string = "";
}
