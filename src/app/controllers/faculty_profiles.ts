import FetchableState from "../models/enums/fetchable_state";
import * as facultyMemberAPI from "../services/faculty_members";
import rootStore from "../store";

const { facultyProfiles } = rootStore;

export default class FacultyProfilesController {
    public static getAll() {
        // tslint:disable-next-line
        window["fp"] = facultyProfiles;
        facultyProfiles.fetchState = FetchableState.Fetching;
        facultyProfiles.fetchError = undefined;

        facultyMemberAPI
            .fetchAllFacultyMembers()
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
