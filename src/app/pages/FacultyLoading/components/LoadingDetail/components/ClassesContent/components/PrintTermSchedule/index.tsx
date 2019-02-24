import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../components/reusable/PrintPreviewDialog";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import PrintPreview from "./components/PrintPreview";
import PrintSettings from "./components/PrintSettings";
import styles from "./styles";

// tslint:disable-next-line
const ReactToPrint = require("react-to-print");

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class PrintTermSchedule extends React.Component<IPropsType> {
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
            printTermScheduleState: { isShowing, yearFilter },
            activeTerm,
            classesTabState,
            year,
        } = facultyLoading!;
        const { classSchedules } = classesTabState;
        const noYearFilter = yearFilter === 0;
        return (
            <PrintPreviewDialog title="Print Term Schedule" open={isShowing}>
                <Grid
                    container
                    direction="row"
                    alignItems="stretch"
                    wrap="nowrap"
                    className={classes.root}
                >
                    <Grid item xs={9} className={classes.preview}>
                        {noYearFilter && (
                            <StateWrapper
                                fetchableState={classesTabState.fetchStatus}
                            >
                                {() => (
                                    <div className={classes.base}>
                                        <Paper className={classes.paper}>
                                            <div
                                                ref={(el: any) =>
                                                    (this.printRef = el)
                                                }
                                            >
                                                <PrintPreview
                                                    term={activeTerm!.term}
                                                    startYear={
                                                        activeTerm!.startYear
                                                    }
                                                    classSchedules={Array.from(
                                                        classSchedules!.values()
                                                    )}
                                                />
                                            </div>
                                            <ReactToPrint
                                                trigger={this.getTrigger}
                                                content={this.getPrintContent}
                                            />
                                        </Paper>
                                    </div>
                                )}
                            </StateWrapper>
                        )}
                        {!noYearFilter && (
                            <StateWrapper
                                fetchableState={classesTabState.fetchStatus}
                            >
                                {() => (
                                    <div className={classes.base}>
                                        <Paper className={classes.paper}>
                                            <div
                                                ref={(el: any) =>
                                                    (this.printRef = el)
                                                }
                                            >
                                                <Grid container spacing={32}>
                                                    {year!.map(term => (
                                                        <Grid
                                                            item
                                                            key={term.id}
                                                        >
                                                            <PrintPreview
                                                                term={term.term}
                                                                startYear={
                                                                    term.startYear
                                                                }
                                                                classSchedules={
                                                                    term.classSchedules!
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
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
                        )}
                    </Grid>
                    <Grid item xs={3} className={classes.settings}>
                        <PrintSettings />
                    </Grid>
                </Grid>
            </PrintPreviewDialog>
        );
    }
}

export default withStyles(styles)(PrintTermSchedule);
