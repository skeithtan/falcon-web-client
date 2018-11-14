import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../components/reusable/PrintPreviewDialog";
import PrintPreviewHead from "../../../../../../../../components/reusable/PrintPreviewHead";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
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
            printTermScheduleState: { isShowing },
            activeTerm,
        } = facultyLoading!;
        return (
            <PrintPreviewDialog title="Print Term Schedule" open={isShowing}>
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
                        </Grid>
                    </div>
                    <ReactToPrint
                        trigger={this.getTrigger}
                        content={this.getPrintContent}
                    />
                </Paper>
            </PrintPreviewDialog>
        );
    }
}

export default withStyles(styles)(PrintTermSchedule);
