import FetchableState from "../models/enums/fetchable_state";
import FacultyMembersService from "../services/faculty_members";
import rootStore from "../store";

const { facultyProfiles } = rootStore;

export default class FacultyProfilesController {
    public static getAll() {
        facultyProfiles.fetchState = FetchableState.Fetching;
        facultyProfiles.fetchError = undefined;

        FacultyMembersService.fetchAllFacultyMembers()
            .then(fm => {
                facultyProfiles.facultyMembers = fm;
                facultyProfiles.fetchState = FetchableState.Fetched;
            })
            .catch((e: Error) => {
                facultyProfiles.fetchState = FetchableState.Error;
                facultyProfiles.fetchError = e.message;
            });
    }

    public static toggleAddFacultyMemberForm(shouldShow: boolean) {
        facultyProfiles.addFacultyMemberFormIsShowing = shouldShow;
    }
}
