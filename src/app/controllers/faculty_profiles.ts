import FetchableStatus from "../models/enums/fetchable_status";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import FacultyMembersService from "../services/faculty_members";
import rootStore from "../store";
import { groupById } from "../utils/group_by_id";

const { facultyProfiles } = rootStore;

export default class FacultyProfilesController {
    public static getAll() {
        facultyProfiles.fetchStatus = FetchableStatus.Fetching;
        facultyProfiles.fetchError = undefined;

        FacultyMembersService.fetchAllFacultyMembers()
            .then(fm => {
                facultyProfiles.facultyMembers = groupById(fm);
                facultyProfiles.fetchStatus = FetchableStatus.Fetched;
            })
            .catch((e: Error) => {
                facultyProfiles.fetchStatus = FetchableStatus.Error;
                facultyProfiles.fetchError = e.message;
            });
    }

    public static get(facultyId: number) {
        FacultyMembersService.fetchFacultyMember(facultyId)
            .then(facultyMember => {
                facultyProfiles.facultyMembers![facultyId] = facultyMember;
            })
            .catch((e: Error) => {
                facultyProfiles.fetchStatus = FetchableStatus.Error;
                facultyProfiles.fetchError = e.message;
            });
    }

    // public static create(form: AddFacultyMemberForm) {
    //     FacultyMembersService.addFacultyMember(form)
    //         .then(FacultyMember) => {

    //         }
    // }

    public static toggleAddFacultyMemberForm(shouldShow: boolean) {
        facultyProfiles.addFacultyMemberFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form on close
            facultyProfiles.addFacultyMemberFormState.form = new AddFacultyMemberForm();
        }
    }
}
