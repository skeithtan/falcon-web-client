import { computed, observable } from "mobx";
import FetchableState from "../../interfaces/fetchable_state";
import FacultyLoadingFacultyMember from "../../models/entities/faculty_loading_faculty_member";
import FeedbackStatus from "../../models/enums/feedback_status";
import LoadAmountStatus from "../../models/enums/load_amount_status";
import TermStatus from "../../models/enums/term_status";
import facultyLoadingState from "../faculty_loading";

export class FacultyTabState extends FetchableState {
    @observable
    public facultyMembers?: FacultyLoadingFacultyMember[] = undefined;

    @observable
    public activefacultyId?: number = undefined;

    @computed
    get activeFaculty() {
        if (!this.activefacultyId || !this.facultyMembers) {
            return undefined;
        }

        return this.facultyMembers!.find(
            fm => fm.facultyId === this.activefacultyId
        );
    }

    @computed
    get segmentedFacultyMembers(): Map<string, FacultyLoadingFacultyMember[]> {
        switch (facultyLoadingState.activeTerm!.status) {
            case TermStatus.Initializing:
                return this.facultySegementedByTimeConstraintSubmission();
            case TermStatus.FeedbackGathering:
                return this.facultySegmentedByFeedback();
            default:
                // Scheduling, Publishing, and Archived have the same segmentation anyway
                return this.facultySegementedByLoadAmountStatus();
        }
    }

    private facultySegementedByTimeConstraintSubmission() {
        const PENDING = "Pending Time Constraints";
        const SUBMITTED = "Submitted Time Constraints";

        const map = new Map<string, FacultyLoadingFacultyMember[]>([
            [PENDING, []],
            [SUBMITTED, []],
        ]);

        this.facultyMembers!.forEach(fm => {
            if (fm.timeConstraints.length === 0) {
                map.get(PENDING)!.push(fm);
            } else {
                map.get(SUBMITTED)!.push(fm);
            }
        });

        return map;
    }

    private facultySegmentedByFeedback(): Map<
        string,
        FacultyLoadingFacultyMember[]
    > {
        const PENDING = "Pending Feedback";
        const ACCEPTED = "Accepted All Classes";
        const REJECTED = "Rejected Some Classes";

        const map = new Map<string, FacultyLoadingFacultyMember[]>([
            [PENDING, []],
            [ACCEPTED, []],
            [REJECTED, []],
        ]);

        this.facultyMembers!.forEach(fm => {
            if (
                fm.classSchedules.every(
                    cs => cs.feedback.status === FeedbackStatus.Pending
                )
            ) {
                map.get(PENDING)!.push(fm);
                return;
            }

            if (
                fm.classSchedules.every(
                    cs => cs.feedback.status === FeedbackStatus.Accepted
                )
            ) {
                map.get(ACCEPTED)!.push(fm);
                return;
            }

            map.get(REJECTED)!.push(fm);
        });

        return map;
    }

    private facultySegementedByLoadAmountStatus(): Map<
        string,
        FacultyLoadingFacultyMember[]
    > {
        const UNASSIGNED = "Unassigned";
        const UNDERLOADED = "Underloaded";
        const ADEQUATE = "Adequate Load";
        const EXTRA = "Extra Load";
        const MAX = "Maximum Load";
        const OVERLOADED = "Overloaded";

        const map = new Map<string, FacultyLoadingFacultyMember[]>([
            [UNASSIGNED, []],
            [UNDERLOADED, []],
            [ADEQUATE, []],
            [EXTRA, []],
            [MAX, []],
            [OVERLOADED, []],
        ]);

        this.facultyMembers!.map(fm => {
            switch (fm.loadAmountStatus) {
                case LoadAmountStatus.Unassigned:
                    map.get(UNASSIGNED)!.push(fm);
                    return;
                case LoadAmountStatus.Underloaded:
                    map.get(UNDERLOADED)!.push(fm);
                    return;
                case LoadAmountStatus.Adequate:
                    map.get(ADEQUATE)!.push(fm);
                    return;
                case LoadAmountStatus.Extra:
                    map.get(EXTRA)!.push(fm);
                    return;
                case LoadAmountStatus.Max:
                    map.get(MAX)!.push(fm);
                    return;
                case LoadAmountStatus.Overloaded:
                    map.get(OVERLOADED)!.push(fm);
                    return;
            }
        });

        return map;
    }
}

export default new FacultyTabState();
