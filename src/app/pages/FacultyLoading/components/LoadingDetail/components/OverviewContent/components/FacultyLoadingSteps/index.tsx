import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { TermStatusReadable } from "../../../../../../../../models/enums/term_status";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class FacultyLoadingSteps extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        return (
            <Stepper activeStep={facultyLoading!.activeTermStatusIndex}>
                {Array.from(TermStatusReadable).map(
                    ([statusEnum, readable]: any) => (
                        <Step key={statusEnum}>
                            <StepLabel>{readable}</StepLabel>
                        </Step>
                    )
                )}
            </Stepper>
        );
    }
}
