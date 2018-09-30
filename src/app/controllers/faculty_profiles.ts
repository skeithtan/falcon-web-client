import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import FacultyMembersService from "../services/faculty_members";
import rootStore from "../store";
import { groupById } from "../utils/group_by_id";

const { facultyProfiles } = rootStore;

export default class FacultyProfilesController {
    public static getAll() {
        facultyProfiles.setStatus(FetchableStatus.Fetching);

        FacultyMembersService.fetchAllFacultyMembers()
            .then(fm => {
                facultyProfiles.facultyMembers = groupById(fm);
                facultyProfiles.setStatus(FetchableStatus.Fetched);
            })
            .catch((e: Error) => {
                facultyProfiles.setStatus(FetchableStatus.Error, e.message);
            });
    }

    public static get(facultyId: string) {
        FacultyMembersService.fetchFacultyMember(facultyId)
            .then(facultyMember => {
                facultyProfiles.facultyMembers!.set(facultyId, facultyMember);
            })
            .catch((e: Error) => {
                facultyProfiles.setStatus(FetchableStatus.Error, e.message);
            });
    }

    public static create(form: AddFacultyMemberForm) {
        facultyProfiles.addFacultyMemberFormState.setStatus(
            FormStatus.Submitting
        );

        FacultyMembersService.addFacultyMember(form)
            .then(fm => {
                facultyProfiles.facultyMembers!.set(String(fm.id), fm);
                facultyProfiles.addFacultyMemberFormState.resetAndClose();
            })
            .catch((e: Error) => {
                facultyProfiles.addFacultyMemberFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }

    public static toggleAddFacultyMemberForm(shouldShow: boolean) {
        facultyProfiles.addFacultyMemberFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form on close
            facultyProfiles.addFacultyMemberFormState.resetAndClose();
        }
    }

    public static setActiveFacultyMember(id: string) {
        facultyProfiles.activeFacultyId = id;
    }
}
