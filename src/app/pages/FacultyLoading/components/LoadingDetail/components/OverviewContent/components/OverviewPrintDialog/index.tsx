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
import FacultyRankTable from "./components/FacultyRankTable";
import StatisticItem from "./components/StatisticItem";
import StatisticTable from "./components/StatisticTable";
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
                Print Overview
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
                                                <StatisticTable title="Faculty Members by Activity">
                                                    <StatisticItem
                                                        title="Active"
                                                        value={
                                                            stats.activity
                                                                .active
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Inactive"
                                                        value={
                                                            stats.activity
                                                                .inactive
                                                        }
                                                    />
                                                </StatisticTable>
                                            </Grid>
                                            <Grid item>
                                                <StatisticTable title="Faculty Members by Rank">
                                                    <StatisticItem
                                                        title="Instructor"
                                                        value={
                                                            stats.rank
                                                                .Instructor
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Assistant Professor"
                                                        value={
                                                            stats.rank
                                                                .AssistantProfessor
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Associate Professor"
                                                        value={
                                                            stats.rank
                                                                .AssociateProfessor
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Full Professor"
                                                        value={
                                                            stats.rank
                                                                .FullProfessor
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Part-time"
                                                        value={
                                                            stats.rank.PartTime
                                                        }
                                                    />
                                                    <StatisticItem
                                                        title="Administrative"
                                                        value={stats.rank.Admin}
                                                    />
                                                </StatisticTable>
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
                                                    title="Unassigned"
                                                    facultyMembers={
                                                        stats.load.Unassigned
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
                                                    title="Underloaded"
                                                    facultyMembers={
                                                        stats.load.Underloaded
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
                                                    title="Adequate Load"
                                                    facultyMembers={
                                                        stats.load.Adequate
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
                                                    title="Extra Load"
                                                    facultyMembers={
                                                        stats.load.Extra
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
                                                    title="Maximum Load"
                                                    facultyMembers={
                                                        stats.load.Max
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FacultyRankTable
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
