import FacultyMember from "../models/entities/faculty_member";
import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
import AddDegreeForm from "../models/forms/add_degree_form";
import AddExtensionWorkForm from "../models/forms/add_extension_work_form";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import AddInstructionalMaterialForm from "../models/forms/add_instructional_material_form";
import AddPresentationForm from "../models/forms/add_presentation_form";
import AddRecognitionForm from "../models/forms/add_recognition_form";
import FacultyMembersService from "../services/faculty_members";
import { DegreeService, ExtensionWorksService, InstructionalMaterialService, PresentationsService, RecognitionService } from "../services/faculty_subdocument";
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

    public static getSubdocuments(facultyMember: FacultyMember) {
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

    public static create(form: AddFacultyMemberForm) {
        facultyProfiles.addFacultyMemberFormState.setStatus(
            FormStatus.Submitting
        );

        FacultyMembersService.addFacultyMember(form)
            .then(fm => {
                facultyProfiles.facultyMembers!.set(fm.id, fm);
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

    public static setActiveFacultyMember(id: number) {
        facultyProfiles.activeFacultyId = id;
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
    // ─── Add subdocuments  ───────────────────────────────────────────────────────────────────────────
    //

    public static addDegree(form: AddDegreeForm) {
        const facultyMember = facultyProfiles.activeFacultyMember;
        DegreeService.add(form)
            .then(d => {
                facultyMember!.degrees!.push(d);
                facultyProfiles.addDegreeFormState.resetAndClose();
            })
            .catch(e => {
                facultyProfiles.addDegreeFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }

    public static addRecognition(form: AddRecognitionForm) {
        const facultyMember = facultyProfiles.activeFacultyMember;
        RecognitionService.add(form)
            .then(r => {
                facultyMember!.recognitions!.push(r);
                facultyProfiles.addRecognitionFormState.resetAndClose();
            })
            .catch(e => {
                facultyProfiles.addRecognitionFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }

    public static addPresentation(form: AddPresentationForm) {
        const facultyMember = facultyProfiles.activeFacultyMember;
        PresentationsService.add(form)
            .then(p => {
                facultyMember!.presentations!.push(p);
                facultyProfiles.addPresentationFormState.resetAndClose();
            })
            .catch(e => {
                facultyProfiles.addPresentationFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }

    public static addInstructionalMaterial(form: AddInstructionalMaterialForm) {
        const facultyMember = facultyProfiles.activeFacultyMember;
        InstructionalMaterialService.add(form)
            .then(im => {
                facultyMember!.instructionalMaterials!.push(im);
                facultyProfiles.addInstructionalMaterialFormState.resetAndClose();
            })
            .catch(e => {
                facultyProfiles.addInstructionalMaterialFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }

    public static addExtensionWork(form: AddExtensionWorkForm) {
        const facultyMember = facultyProfiles.activeFacultyMember;
        ExtensionWorksService.add(form)
            .then(ew => {
                facultyMember!.extensionWorks!.push(ew);
                facultyProfiles.addExtensionWorkFormState.resetAndClose();
            })
            .catch(e => {
                facultyProfiles.addExtensionWorkFormState.setStatus(
                    FormStatus.Error,
                    e.message
                );
            });
    }
}
