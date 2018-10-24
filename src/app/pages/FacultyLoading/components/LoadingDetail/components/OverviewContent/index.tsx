import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
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
        return (
            <Grid
                container
                direction="column"
                spacing={24}
                className={classes.root}
            >
                <Grid item>
                    <Typography variant="h5">
                        {facultyLoading!.activeTerm!.readable}
                    </Typography>
                </Grid>
                <Grid item>
                    <FacultyLoadingSteps />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(OverviewContent);
