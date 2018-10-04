import * as _ from "lodash";
import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import FacultyMember from "../models/entities/faculty_member";
import addDegreeFormState, {
    AddDegreeFormState,
} from "./faculty_profiles/add_degree_form";
import addFacultyMemberFormState, {
    AddFacultyMemberFormState,
} from "./faculty_profiles/add_faculty_member_form";

export class FacultyProfilesState extends FetchableState {
    @observable
    public facultyMembers?: Map<number, FacultyMember> = undefined;

    @observable
    public addFacultyMemberFormState: AddFacultyMemberFormState = addFacultyMemberFormState;

    @observable
    public addDegreeFormState: AddDegreeFormState = addDegreeFormState;

    @observable
    public activeFacultyId?: number = undefined;

    @computed
    get activeFacultyMember() {
        if (!this.activeFacultyId || !this.facultyMembers) {
            return undefined;
        }

        return this.facultyMembers!.get(this.activeFacultyId);
    }

    @computed
    get segregatedFacultyMembers() {
        const facultyMembers = Array.from(this.facultyMembers!.values());
        return _.groupBy(facultyMembers, "type");
    }
}

export default new FacultyProfilesState();
