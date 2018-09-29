import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { observable } from "mobx";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import Sex from "../enums/sex";

export default class AddFacultyMemberForm {
    @IsNotEmpty({
        message: "First name should not be empty",
    })
    @observable
    public firstName: string;

    @IsNotEmpty({
        message: "Last name should not be empty",
    })
    @observable
    public lastName: string;

    @IsEmail(undefined, {
        message: "This is not a valid email",
    })
    @IsNotEmpty({
        message: "Email should not be empty",
    })
    @observable
    public email: string;

    @IsNotEmpty()
    @MinLength(10)
    @observable
    public password: string;

    @observable
    public sex: Sex;

    @observable
    public type: FacultyMemberType;

    @observable
    public activity: ActivityType;

    @IsNotEmpty()
    @observable
    public birthDate: string;
}
