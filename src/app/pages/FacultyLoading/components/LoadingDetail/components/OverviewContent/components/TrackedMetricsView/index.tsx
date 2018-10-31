import * as React from "react";
import AddingStageMetrics from "./components/AddingStageMetrics";
import FeedbackStageMetrics from "./components/FeedbackStageMetrics";
import SchedulingStageMetrics from "./components/SchedulingStageMetrics";

type TrackedMetricsVariant = "adding" | "scheduling" | "feedback";

interface IPropsType {
    variant: TrackedMetricsVariant;
}

export default class TrackedMetricsView extends React.Component<IPropsType> {
    public render() {
        const { variant } = this.props;
        return (
            <React.Fragment>
                {variant === "adding" && <AddingStageMetrics />}
                {variant === "scheduling" && <SchedulingStageMetrics />}
                {variant === "feedback" && <FeedbackStageMetrics />}
            </React.Fragment>
        );
    }
}
