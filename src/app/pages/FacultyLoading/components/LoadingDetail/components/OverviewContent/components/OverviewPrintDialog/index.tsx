import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../components/reusable/PrintPreviewDialog";
import PrintPreviewHead from "../../../../../../../../components/reusable/PrintPreviewHead";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import ByLoadList from "./components/ByLoadList";
import styles from "./styles";

// tslint:disable-next-line
const ReactToPrint = require("react-to-print");

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class OverviewPrintDialog extends React.Component<IPropsType> {
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
            overviewPrintDialogState,
            activeTerm,
            currentTermStatsState,
        } = facultyLoading!;
        const { stats } = currentTermStatsState;
        const { isShowing } = overviewPrintDialogState;

        return (
            <PrintPreviewDialog title="Print Term Overview" open={isShowing}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    className={classes.root}
                >
                    <StateWrapper
                        fetchableState={currentTermStatsState!.fetchStatus}
                    >
                        {() => (
                            <div className={classes.base}>
                                <Paper className={classes.paper}>
                                    <div
                                        ref={(el: any) => (this.printRef = el)}
                                        className={classes.content}
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={24}
                                        >
                                            <Grid item>
                                                <PrintPreviewHead />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    {`Term Overview for ${
                                                        activeTerm!
                                                            .ordinalTermReadable
                                                    } ${
                                                        activeTerm!
                                                            .yearRangeReadable
                                                    }`}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="overline">
                                                    By Activity
                                                </Typography>
                                                <Typography>{`Active Faculty Members: ${
                                                    stats.activity.active
                                                }`}</Typography>
                                                <Typography>{`Inactive Faculty Members: ${
                                                    stats.activity.inactive
                                                }`}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="overline">
                                                    By Faculty Rank
                                                </Typography>
                                                <Typography>{`Instructors: ${
                                                    stats.rank.Instructor
                                                }`}</Typography>
                                                <Typography>{`Assistant Professors: ${
                                                    stats.rank
                                                        .AssistantProfessor
                                                }`}</Typography>
                                                <Typography>{`Associate Professors: ${
                                                    stats.rank
                                                        .AssociateProfessor
                                                }`}</Typography>
                                                <Typography>{`Full Professors: ${
                                                    stats.rank.FullProfessor
                                                }`}</Typography>
                                                <Typography>{`Part-time Members: ${
                                                    stats.rank.PartTime
                                                }`}</Typography>
                                                <Typography>{`Administrative Members: ${
                                                    stats.rank.Admin
                                                }`}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="overline">
                                                    By Load
                                                </Typography>
                                                <ByLoadList
                                                    title="Unassigned"
                                                    facultyMembers={
                                                        stats.load.Unassigned
                                                    }
                                                />
                                                <ByLoadList
                                                    title="Underloaded"
                                                    facultyMembers={
                                                        stats.load.Underloaded
                                                    }
                                                />
                                                <ByLoadList
                                                    title="Extra Load"
                                                    facultyMembers={
                                                        stats.load.Adequate
                                                    }
                                                />
                                                <ByLoadList
                                                    title="Extra Load"
                                                    facultyMembers={
                                                        stats.load.Extra
                                                    }
                                                />
                                                <ByLoadList
                                                    title="Maximum Load"
                                                    facultyMembers={
                                                        stats.load.Max
                                                    }
                                                />
                                                <ByLoadList
                                                    title="Overloaded"
                                                    facultyMembers={
                                                        stats.load.Overloaded
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <ReactToPrint
                                        trigger={this.getTrigger}
                                        content={this.getPrintContent}
                                    />
                                </Paper>
                            </div>
                        )}
                    </StateWrapper>
                </Grid>
            </PrintPreviewDialog>
        );
    }
}

export default withStyles(styles)(OverviewPrintDialog);
