import { observable } from "mobx";
import AggregatedEntities from "../interfaces/aggregated_entities";
import FetchableState from "../interfaces/fetchable_state";
import FacultyMember from "../models/entities/faculty_member";
import addFacultyMemberFormState, {
    AddFacultyMemberFormState,
} from "./faculty_profiles/add_faculty_member_form";

export class FacultyProfilesState extends FetchableState {
    @observable
    public facultyMembers?: AggregatedEntities<FacultyMember> = undefined;

    @observable
    public addFacultyMemberFormState: AddFacultyMemberFormState = addFacultyMemberFormState;
}

export default new FacultyProfilesState();
