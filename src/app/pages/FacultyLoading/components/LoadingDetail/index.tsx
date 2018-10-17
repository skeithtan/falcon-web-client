import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import AddTermFormView from "../AddTermFormView";
import LoadingBar from "./components/LoadingBar";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class LoadingDetail extends React.Component<IPropsType> {
    public render() {
        return (
            <React.Fragment>
                <Grid
                    container
                    direction="column"
                    wrap="nowrap"
                    alignItems="stretch"
                >
                    <Grid item>
                        <LoadingBar />
                    </Grid>
                </Grid>
                <AddTermFormView />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoadingDetail);
