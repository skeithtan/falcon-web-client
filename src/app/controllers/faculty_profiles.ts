import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
import FacultyMembersService from "../services/faculty_members";
import DegreeService from "../services/faculty_subdocument/degree";
import ExtensionWorkService from "../services/faculty_subdocument/extension_work";
import InstructionalMaterialService from "../services/faculty_subdocument/instructional_material";
import PresentationService from "../services/faculty_subdocument/presentation";
import RecognitionService from "../services/faculty_subdocument/recognition";
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

    public static submitAddFacultyMember() {
        const { addFacultyMemberFormState: formState } = facultyProfiles;
        const form = formState.form;
        formState.setStatus(FormStatus.Submitting);

        FacultyMembersService.addFacultyMember(form)
            .then(fm => {
                facultyProfiles.facultyMembers!.set(fm.id, fm);
                formState.resetAndClose();
                this.setActiveFacultyMember(fm.id);
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }

    public static toggleAddFacultyMemberForm(shouldShow: boolean) {
        facultyProfiles.addFacultyMemberFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form on close
            facultyProfiles.addFacultyMemberFormState.resetAndClose();
        }
    }

    public static setActiveFacultyMember(id: number) {
        facultyProfiles.activeFacultyId = id;
        const facultyMember = facultyProfiles.activeFacultyMember!;
        facultyMember.fetchStatus = FetchableStatus.Fetching;

        FacultyMembersService.fetchFacultyMember(facultyMember.id)
            .then(fm => {
                facultyProfiles.facultyMembers!.set(facultyMember.id, fm);
            })
            .catch((e: Error) => {
                facultyMember.fetchStatus = FetchableStatus.Error;
                facultyProfiles.setStatus(FetchableStatus.Error, e.message);
            });
    }

    //
    // ─── Toggle subdocument forms ───────────────────────────────────────────────────────────────────────────
    //

    public static toggleAddDegreeForm(shouldShow: boolean) {
        facultyProfiles.addDegreeFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form on close
            facultyProfiles.addDegreeFormState.resetAndClose();
        }
    }

    public static toggleAddExtensionWorkForm(shouldShow: boolean) {
        facultyProfiles.addExtensionWorkFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form
            facultyProfiles.addExtensionWorkFormState.resetAndClose();
        }
    }

    public static toggleAddInstructionalMaterialForm(shouldShow: boolean) {
        facultyProfiles.addInstructionalMaterialFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form
            facultyProfiles.addInstructionalMaterialFormState.resetAndClose();
        }
    }

    public static toggleAddPresentationForm(shouldShow: boolean) {
        facultyProfiles.addPresentationFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form
            facultyProfiles.addPresentationFormState.resetAndClose();
        }
    }

    public static toggleAddRecognitionForm(shouldShow: boolean) {
        facultyProfiles.addRecognitionFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form
            facultyProfiles.addRecognitionFormState.resetAndClose();
        }
    }

    //
    // ─── Submit Add subdocuments  ───────────────────────────────────────────────────────────────────────────
    //

    public static submitAddDegree() {
        const facultyMember = facultyProfiles.activeFacultyMember!;
        const { addDegreeFormState: formState } = facultyProfiles;
        const form = formState.form;
        form.facultyId = facultyMember.id;
        formState.setStatus(FormStatus.Submitting);

        DegreeService.add(form)
            .then(d => {
                facultyMember.degrees!.push(d);
                formState.resetAndClose();
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }

    public static submitAddRecognition() {
        const facultyMember = facultyProfiles.activeFacultyMember!;
        const { addRecognitionFormState: formState } = facultyProfiles;
        const form = formState.form;
        form.facultyId = facultyMember.id;
        formState.setStatus(FormStatus.Submitting);

        RecognitionService.add(form)
            .then(r => {
                facultyMember.recognitions!.push(r);
                formState.resetAndClose();
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }

    public static submitAddPresentation() {
        const facultyMember = facultyProfiles.activeFacultyMember!;
        const { addPresentationFormState: formState } = facultyProfiles;
        const form = formState.form;
        form.facultyId = facultyMember.id;
        formState.setStatus(FormStatus.Submitting);

        PresentationService.add(form)
            .then(p => {
                facultyMember.presentations!.push(p);
                formState.resetAndClose();
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }

    public static submitAddInstructionalMaterial() {
        const facultyMember = facultyProfiles.activeFacultyMember!;
        const {
            addInstructionalMaterialFormState: formState,
        } = facultyProfiles;
        const form = formState.form;
        form.facultyId = facultyMember.id;
        formState.setStatus(FormStatus.Submitting);

        InstructionalMaterialService.add(form)
            .then(im => {
                facultyMember.instructionalMaterials!.push(im);
                formState.resetAndClose();
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }

    public static submitAddExtensionWork() {
        const facultyMember = facultyProfiles.activeFacultyMember!;
        const { addExtensionWorkFormState: formState } = facultyProfiles;
        const form = formState.form;
        form.facultyId = facultyMember.id;
        formState.setStatus(FormStatus.Submitting);

        ExtensionWorkService.add(form)
            .then(ew => {
                facultyMember.extensionWorks!.push(ew);
                formState.resetAndClose();
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e.message);
            });
    }
}
