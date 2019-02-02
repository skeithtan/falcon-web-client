import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewHead from "../../../../../../../../../../../../components/reusable/PrintPreviewHead";
import IStyleClasses from "../../../../../../../../../../../../interfaces/style_classes";
import { MeetingDaysReadable } from "../../../../../../../../../../../../models/enums/meeting_days";
import { FacultyLoadingState } from "../../../../../../../../../../../../store/faculty_loading";
import PrintScheduleSectionList from "../../../PrintScheduleSectionList";
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
        const {
            facultyTabState: { activeFaculty },
        } = facultyLoading!;
        return (
            <Paper className={classes.paper}>
                <div ref={(el: any) => (this.printRef = el)}>
                    <Grid
                        container
                        direction="column"
                        wrap="nowrap"
                        spacing={24}
                        className={classes.root}
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
                        {Array.from(MeetingDaysReadable).map(
                            ([mdEnum, mdStr]) => {
                                const dayClasses = activeFaculty!.classSchedules.filter(
                                    cs => cs.meetingDays === mdEnum
                                );
                                return dayClasses.length > 0 ? (
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
                                                classSchedules={dayClasses}
                                            />
                                        </Grid>
                                    </Grid>
                                ) : (
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
                                            <Typography variant="subtitle1">
                                                No classes assigned
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        )}
                    </Grid>
                </div>
                <ReactToPrint
                    trigger={this.getTrigger}
                    content={this.getPrintContent}
                />
            </Paper>
        );
    }
}

export default withStyles(styles)(PrintPreview);
