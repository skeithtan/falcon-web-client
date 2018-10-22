import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import AddClassFormView from "./components/AddClassFormView";
import ClassesAppBar from "./components/ClassesAppBar";
import ScheduleCalendar from "./components/ScheduleCalendar";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class ClassesContent extends React.Component<IPropsType> {
    public componentDidMount() {
        FacultyLoadingController.getAllClassSchedulesTabPrerequisites();
    }

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        return (
            <StateWrapper fetchableState={classesTabState.fetchStatus}>
                {() => (
                    <Grid container direction="column">
                        <Grid item>
                            <ClassesAppBar />
                        </Grid>
                        <Grid item xs>
                            <ScheduleCalendar />
                        </Grid>
                        <AddClassFormView />
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}
