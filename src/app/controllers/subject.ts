import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
import AddSubjectForm from "../models/forms/add_subject_form";
import UpdateSubjectForm from "../models/forms/update_subject_form";
import SubjectsService from "../services/subjects";
import rootStore from "../store";
import { groupById } from "../utils/group_by_id";

const { subjects } = rootStore;

export default class SubjectsController {
    public static getAll() {
        subjects.setStatus(FetchableStatus.Fetching);

        SubjectsService.fetchAllSubjects()
            .then(s => {
                subjects.subjectItems = groupById(s);
                subjects.setStatus(FetchableStatus.Fetched);
            })
            .catch((e: Error) => {
                subjects.setStatus(FetchableStatus.Error, e);
            });
    }

    public static create(form: AddSubjectForm) {
        subjects.addSubjectFormState.setStatus(FormStatus.Submitting);

        SubjectsService.addSubject(form)
            .then(s => {
                subjects.subjectItems!.set(s.id, s);
                subjects.activeSubjectId = s.id;
                subjects.addSubjectFormState.resetAndClose();
            })
            .catch((e: Error) => {
                subjects.addSubjectFormState.setStatus(FormStatus.Error, e);
            });
    }

    public static updateSubject(form: UpdateSubjectForm, activeId: number) {
        subjects.updateSubjectFormState.setStatus(FormStatus.Submitting);

        SubjectsService.updateSubject(form, activeId)
            .then(s => {
                // REMOVE THIS HACK IN THE FUTURE
                s.fetchStatus = FetchableStatus.Fetched;
                subjects.subjectItems!.set(s.id, s);
                subjects.updateSubjectFormState.resetAndClose();
            })
            .catch((e: Error) => {
                subjects.updateSubjectFormState.setStatus(FormStatus.Error, e);
            });
    }

    public static setActiveSubject(id: number) {
        subjects.activeSubjectId = id;
        const subject = subjects.activeSubject!;
        subject.fetchStatus = FetchableStatus.Fetching;

        SubjectsService.fetchSubject(subject.id)
            .then(s => {
                // REMOVE THIS HACK IN THE FUTURE
                s.fetchStatus = FetchableStatus.Fetched;
                subjects.subjectItems!.set(subject.id, s);
            })
            .catch((e: Error) => {
                subject.fetchStatus = FetchableStatus.Error;
                subjects.setStatus(FetchableStatus.Error, e);
            });
    }

    public static toggleAddSubjectForm(shouldShow: boolean) {
        subjects.addSubjectFormState.isShowing = shouldShow;

        if (!shouldShow) {
            // Reset the form on close
            subjects.addSubjectFormState.resetAndClose();
        }
    }

    public static toggleUpdateSubjectForm(shouldShow: boolean) {
        subjects.updateSubjectFormState.isShowing = shouldShow;

        if (!shouldShow) {
            subjects.updateSubjectFormState.resetAndClose();
        } else {
            subjects.updateSubjectFormState.form.prefillForm(
                subjects.activeSubject!
            );
        }
    }
}
