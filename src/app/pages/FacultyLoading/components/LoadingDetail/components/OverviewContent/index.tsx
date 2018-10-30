import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import TermStatus from "../../../../../../models/enums/term_status";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import FacultyLoadingSteps from "./components/FacultyLoadingSteps";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class OverviewContent extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, classes } = this.props;
        const { activeTerm } = facultyLoading!;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    direction="column"
                    spacing={24}
                    className={classes.gridContainer}
                    wrap="nowrap"
                >
                    <Grid
                        item
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item xs={6}>
                            <Typography variant="h5">
                                {facultyLoading!.activeTerm!.readable}
                            </Typography>
                        </Grid>
                        {activeTerm!.status !== TermStatus.Archived && (
                            <Grid
                                item
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                wrap="nowrap"
                                spacing={8}
                                xs={6}
                            >
                                <Grid item>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        disabled={
                                            activeTerm!.status ===
                                            TermStatus.Initializing
                                        }
                                    >
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="primary" variant="contained">
                                        {activeTerm!.status ===
                                        TermStatus.FeedbackGathering
                                            ? "Publish"
                                            : "Proceed"}
                                    </Button>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item>
                        <FacultyLoadingSteps />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(OverviewContent);
