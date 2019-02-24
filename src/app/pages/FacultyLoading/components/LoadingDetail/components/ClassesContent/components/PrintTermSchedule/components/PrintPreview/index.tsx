import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewHead from "../../../../../../../../../../components/reusable/PrintPreviewHead";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import ClassSchedule from "../../../../../../../../../../models/entities/class_schedule";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import ScheduleTable from "../ScheduleTable";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
    term: string;
    startYear: number;
    classSchedules: ClassSchedule[];
}

@observer
class PrintPreview extends React.Component<IPropsType> {
    public render() {
        const { classes, term, startYear, classSchedules } = this.props;
        return (
            <Paper className={classes.paper}>
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
                            <Typography variant="h6">
                                {`Schedule for ${term} Term ${startYear} - ${startYear +
                                    1}`}
                            </Typography>
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
                    <Grid item container direction="column" spacing={24}>
                        {classSchedules &&
                            Array.from(MeetingDaysReadable).map(
                                ([mdrEnum, mdrStr]) => {
                                    const dayClasses = classSchedules!.filter(
                                        cs => cs.meetingDays === mdrEnum
                                    );

                                    return (
                                        <Grid item key={mdrEnum}>
                                            <ScheduleTable
                                                meetingDays={mdrStr}
                                                classSchedules={dayClasses}
                                            />
                                        </Grid>
                                    );
                                }
                            )}
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(PrintPreview);
