import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyLoadingTab from "../../../../models/enums/faculty_loading_tab";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import AddTermFormView from "../AddTermFormView";
import TermList from "../TermList";
import LoadingBar from "./components/LoadingBar";
import OverviewContent from "./components/OverviewContent";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class LoadingDetail extends React.Component<IPropsType> {
    public render() {
        const { classes, facultyLoading } = this.props;
        const { activeTab } = facultyLoading!;
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
                    {activeTab === FacultyLoadingTab.Overview && (
                        <Grid item className={classes.tab}>
                            <OverviewContent />
                        </Grid>
                    )}
                </Grid>
                <TermList />
                <AddTermFormView />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoadingDetail);
