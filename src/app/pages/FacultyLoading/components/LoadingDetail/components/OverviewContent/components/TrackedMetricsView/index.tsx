import { inject, observer } from "mobx-react";
import * as React from "react";
import TermStatus from "../../../../../../../../models/enums/term_status";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import AddingStageMetrics from "./components/AddingStageMetrics";
import FeedbackStageMetrics from "./components/FeedbackStageMetrics";
import SchedulingStageMetrics from "./components/SchedulingStageMetrics";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TrackedMetricsView extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        const { activeTerm } = facultyLoading!;
        return (
            <React.Fragment>
                {activeTerm!.status === TermStatus.Initializing && (
                    <AddingStageMetrics />
                )}
                {activeTerm!.status === TermStatus.Scheduling && (
                    <SchedulingStageMetrics />
                )}
                {activeTerm!.status === TermStatus.FeedbackGathering && (
                    <FeedbackStageMetrics />
                )}
            </React.Fragment>
        );
    }
}
