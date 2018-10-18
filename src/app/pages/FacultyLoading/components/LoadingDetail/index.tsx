import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import AddTermFormView from "../AddTermFormView";
import TermList from "../TermList";
import LoadingBar from "./components/LoadingBar";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

class LoadingDetail extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid
                    container
                    direction="column"
                    wrap="nowrap"
                    alignItems="stretch"
                    className={classes.detail}
                >
                    <Grid item>
                        <LoadingBar />
                    </Grid>
                </Grid>
                <TermList />
                <AddTermFormView />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoadingDetail);
