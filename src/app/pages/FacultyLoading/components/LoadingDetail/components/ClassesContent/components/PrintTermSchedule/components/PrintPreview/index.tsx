import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewHead from "../../../../../../../../../../components/reusable/PrintPreviewHead";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import ScheduleTable from "../ScheduleTable";
import styles from "./styles";

// tslint:disable-next-line
const ReactToPrint = require("react-to-print");

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class PrintPreview extends React.Component<IPropsType> {
    public printRef?: any;

    public getTrigger = () => {
        const { classes } = this.props;
        return (
            <Button variant="extendedFab" className={classes.printButton}>
                Print Schedule
            </Button>
        );
    };

    public getPrintContent = () => this.printRef;

    public render() {
        const { facultyLoading, classes } = this.props;
        const { activeTerm, classesTabState } = facultyLoading!;
        const { classSchedules } = classesTabState;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div
                        ref={(el: any) => (this.printRef = el)}
                        className={classes.printContentContainer}
                    >
                        <Grid
                            container
                            direction="column"
                            wrap="nowrap"
                            spacing={24}
                        >
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
                                        {`Schedule for ${activeTerm!.readable}`}
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
                            <Grid
                                item
                                container
                                direction="column"
                                spacing={24}
                            >
                                {classSchedules &&
                                    Array.from(MeetingDaysReadable).map(
                                        ([mdrEnum, mdrStr]) => {
                                            const dayClasses = Array.from(
                                                classSchedules!.values()
                                            ).filter(
                                                cs => cs.meetingDays === mdrEnum
                                            );

                                            return (
                                                <Grid item key={mdrEnum}>
                                                    <ScheduleTable
                                                        meetingDays={mdrStr}
                                                        classSchedules={
                                                            dayClasses
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        }
                                    )}
                            </Grid>
                        </Grid>
                    </div>
                    <ReactToPrint
                        trigger={this.getTrigger}
                        content={this.getPrintContent}
                    />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(PrintPreview);
