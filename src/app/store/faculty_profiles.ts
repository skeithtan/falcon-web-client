import * as _ from "lodash";
import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import FacultyMember from "../models/entities/faculty_member";
import addFacultyMemberFormState, { AddFacultyMemberFormState } from "./faculty_profiles/add_faculty_member_form";

export class FacultyProfilesState extends FetchableState {
    @observable
    public facultyMembers?: Map<string, FacultyMember> = undefined;

    @observable
    public addFacultyMemberFormState: AddFacultyMemberFormState = addFacultyMemberFormState;

    @computed
    get segregatedFacultyMembers() {
        const facultyMembers = Array.from(this.facultyMembers!.values());
        return _.groupBy(facultyMembers, "type");
    }
}

export default new FacultyProfilesState();
