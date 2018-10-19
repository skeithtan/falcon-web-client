import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import FacultyList from "./components/FacultyList";
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
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(FacultyContent);
