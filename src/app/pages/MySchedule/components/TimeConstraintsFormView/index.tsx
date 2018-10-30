import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import TimeConstraint from "../../../../models/entities/time_constraint";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../models/enums/meeting_days";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../../models/enums/meeting_hours";
import TimeConstraintType, {
    TimeConstraintTypeReadable,
} from "../../../../models/enums/time_constraint_type";
import { FacultyLoadingState } from "../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TimeConstraintsFormView extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyLoadingController.toggleTimeConstraintsForm(false);
    };

    public onSubmitClick = () => {
        FacultyLoadingController.submitTimeConstraints();
    };

    public onChange = (md: MeetingDays, mh: MeetingHours) => (event: any) => {
        const tct = event.target.value;
        const { facultyLoading } = this.props;
        const { facultyTabState } = facultyLoading!;
        const {
            form: { timeConstraints },
        } = facultyTabState.timeConstraintsFormState;

        const tcIndex = timeConstraints.findIndex(
            tcCandidate =>
                tcCandidate.meetingDays === md &&
                tcCandidate.meetingHours === mh
        );

        if (tcIndex === -1) {
            timeConstraints.push(
                new TimeConstraint({
                    isPreferred: tct === TimeConstraintType.Preferred,
                    meetingDays: md,
                    meetingHours: mh,
                })
            );
            return;
        }

        if (tct === TimeConstraintType.NotAvailable) {
            timeConstraints.splice(tcIndex, 1);
            return;
        }

        const tc = timeConstraints[tcIndex];
        tc.meetingDays = md;
        tc.meetingHours = mh;
        tc.isPreferred = tct === TimeConstraintType.Preferred;
    };

    public render() {
        const { facultyLoading } = this.props;
        const { facultyTabState } = facultyLoading!;
        const {
            isShowing,
            form,
            validationErrors,
        } = facultyTabState.timeConstraintsFormState;
        const sufficientConstraints =
            form.mondayThursdayCount >= 3 && form.tuesdayFridayCount >= 3;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Submit Time Constraints"
            >
                <Grid
                    container
                    spacing={24}
                    alignItems="stretch"
                    direction="column"
                    wrap="nowrap"
                >
                    <Grid item container spacing={32} direction="row">
                        {Array.from(MeetingDaysReadable.entries()).map(
                            ([md, mdStr]) => (
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    spacing={24}
                                    xs
                                    key={md}
                                >
                                    {Array.from(
                                        MeetingHoursReadable.entries()
                                    ).map(([mh, mhStr]) => {
                                        const tc = form.timeConstraints.find(
                                            tcc =>
                                                tcc.meetingHours === mh &&
                                                tcc.meetingDays === md
                                        );
                                        let value =
                                            tc === undefined
                                                ? TimeConstraintType.NotAvailable
                                                : TimeConstraintType.Available;

                                        if (tc && tc.isPreferred) {
                                            value =
                                                TimeConstraintType.Preferred;
                                        }

                                        return (
                                            <Grid item key={mh}>
                                                <TextField
                                                    select
                                                    label={mhStr}
                                                    variant="outlined"
                                                    onChange={this.onChange(
                                                        md,
                                                        mh
                                                    )}
                                                    value={value}
                                                    error={
                                                        "type" in
                                                        validationErrors
                                                    }
                                                    helperText={
                                                        validationErrors.type
                                                    }
                                                    fullWidth
                                                >
                                                    {Array.from(
                                                        TimeConstraintTypeReadable
                                                    ).map(
                                                        ([
                                                            typeEnum,
                                                            typeReadable,
                                                        ]) => (
                                                            <MenuItem
                                                                key={typeEnum}
                                                                value={typeEnum}
                                                            >
                                                                {typeReadable}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </TextField>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            )
                        )}
                    </Grid>
                    {!sufficientConstraints && (
                        <Grid item>
                            <FormHelperText error>
                                You need to submit at least three (3) time
                                constraints per day.
                            </FormHelperText>
                        </Grid>
                    )}
                    <Grid item>
                        <FormSubmitBar
                            disabled={!sufficientConstraints}
                            formState={
                                facultyLoading!.facultyTabState
                                    .timeConstraintsFormState
                            }
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
