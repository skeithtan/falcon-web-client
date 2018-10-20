import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import FacultyList from "./components/FacultyList";
import FacultyOverview from "./components/FacultyOverview";
import FacultySchedule from "./components/FacultySchedule";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class FacultyContent extends React.Component<IPropsType> {
    public componentDidMount() {
        FacultyLoadingController.getAllFaculty();
    }

    public render() {
        const { facultyLoading, classes } = this.props;
        const { facultyTabState } = facultyLoading!;
        const { activeFaculty } = facultyTabState;
        return (
            <StateWrapper fetchableState={facultyTabState.fetchStatus}>
                {() => (
                    <Grid
                        container
                        direction="row"
                        wrap="nowrap"
                        alignItems="stretch"
                        className={classes.gridContainer}
                    >
                        <Grid item className={classes.facultyListGridItem}>
                            <FacultyList />
                        </Grid>
                        <Grid
                            item
                            container
                            justify="center"
                            className={classes.content}
                        >
                            {activeFaculty === undefined && (
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    className={classes.detailEmptyState}
                                >
                                    <Typography
                                        variant="h5"
                                        color="textSecondary"
                                    >
                                        Select a faculty member to view their
                                        details
                                    </Typography>
                                </Grid>
                            )}

                            {activeFaculty !== undefined && (
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    className={classes.activeFacultyDetailView}
                                    wrap="nowrap"
                                    spacing={24}
                                >
                                    <Grid item>
                                        <FacultyOverview
                                            facultyMember={activeFaculty!}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FacultySchedule
                                            facultyMember={activeFaculty!}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(FacultyContent);
