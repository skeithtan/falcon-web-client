import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import Sex from "../enums/sex";

export default class AddFacultyProfileForm {
    @IsNotEmpty()
    public firstName: string;

    @IsNotEmpty()
    public lastName: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    @MinLength(10)
    public password: string;

    public sex: Sex;
    public type: FacultyMemberType;
    public activity: ActivityType;

    @IsNotEmpty()
    public birthDate: string;
}
