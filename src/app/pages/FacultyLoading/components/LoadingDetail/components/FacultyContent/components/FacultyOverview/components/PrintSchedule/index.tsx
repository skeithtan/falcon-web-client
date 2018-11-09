import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../../../components/reusable/PrintPreviewDialog";
import PrintPreviewHead from "../../../../../../../../../../components/reusable/PrintPreviewHead";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import PrintScheduleSectionList from "../PrintScheduleSectionList";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class PrintSchedule extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        const {
            facultyTabState: { printScheduleDialogState, activeFaculty },
        } = facultyLoading!;
        const { isShowing } = printScheduleDialogState;
        return (
            <PrintPreviewDialog title="Print Faculty Schedule" open={isShowing}>
                <Grid container direction="column" wrap="nowrap" spacing={24}>
                    <Grid item>
                        <PrintPreviewHead />
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h6">{`${
                                activeFaculty!.fullName
                            }'s Schedule`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="overline"
                                color="textSecondary"
                            >
                                Generated {moment().format("LLLL")}
                            </Typography>
                        </Grid>
                    </Grid>
                    {Array.from(MeetingDaysReadable).map(([mdEnum, mdStr]) => {
                        const classes = activeFaculty!.classSchedules.filter(
                            cs => cs.meetingDays === mdEnum
                        );
                        return (
                            <Grid
                                key={mdEnum}
                                item
                                container
                                direction="column"
                                wrap="nowrap"
                                spacing={16}
                            >
                                <Grid item>
                                    <Typography variant="overline">
                                        {mdStr}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <PrintScheduleSectionList
                                        classSchedules={classes}
                                    />
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            </PrintPreviewDialog>
        );
    }
}
