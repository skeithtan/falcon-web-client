import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../components/reusable/PrintPreviewDialog";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import PrintPreview from "./components/PrintPreview";
import PrintSettings from "./components/PrintSettings";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class PrintTermSchedule extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, classes } = this.props;
        const {
            printTermScheduleState: { isShowing },
        } = facultyLoading!;
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
                        <PrintPreview />
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
