import * as _ from "lodash";
import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import Subject from "../models/entities/subject";
import addSubjectFormState, {
    AddSubjectFormState,
} from "./subjects/add_subject_form";
import updateSubjectFormState, {
    UpdateSubjectFormState,
} from "./subjects/update_subject_form";

export class SubjectsState extends FetchableState {
    @observable
    public subjectItems?: Map<number, Subject> = undefined;

    @observable
    public addSubjectFormState: AddSubjectFormState = addSubjectFormState;

    @observable
    public updateSubjectFormState: UpdateSubjectFormState = updateSubjectFormState;

    @observable
    public activeSubjectId?: number = undefined;

    @computed
    get activeSubject() {
        if (!this.subjectItems || !this.activeSubjectId) {
            return undefined;
        }

        return this.subjectItems!.get(this.activeSubjectId);
    }

    // not sure if this works
    @computed
    get segregatedSubjects() {
        const subjects = Array.from(this.subjectItems!.values());
        return _.groupBy(subjects, "category");
    }
}

export default new SubjectsState();
