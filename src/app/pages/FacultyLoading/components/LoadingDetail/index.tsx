import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../components/reusable/StateWrapper";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyLoadingTab from "../../../../models/enums/faculty_loading_tab";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import TermList from "../TermList";
import ClassesContent from "./components/ClassesContent";
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
            <StateWrapper fetchableState={facultyLoading!.fetchStatus}>
                {() => (
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
                            {activeTab === FacultyLoadingTab.Classes && (
                                <ClassesContent />
                            )}
                        </Grid>
                        <TermList />
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(LoadingDetail);
