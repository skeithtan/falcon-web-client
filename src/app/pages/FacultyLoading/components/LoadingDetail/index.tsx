import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyLoadingTab from "../../../../models/enums/faculty_loading_tab";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import AddTermFormView from "../AddTermFormView";
import TermList from "../TermList";
import FacultyContent from "./components/FacultyContent";
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
        const { facultyLoading, classes } = this.props;
        const { activeTab } = facultyLoading!;
        return (
            <Grid
                container
                direction="column"
                wrap="nowrap"
                alignItems="stretch"
                className={classes.detail}
            >
                <Grid item xs>
                    <LoadingBar />
                </Grid>
                <Grid item xs="auto" className={classes.tabGridItem}>
                    {activeTab === FacultyLoadingTab.Overview && (
                        <OverviewContent />
                    )}
                    {activeTab === FacultyLoadingTab.Faculty && (
                        <FacultyContent />
                    )}
                </Grid>
                <TermList />
                <AddTermFormView />
            </Grid>
        );
    }
}

export default withStyles(styles)(LoadingDetail);
