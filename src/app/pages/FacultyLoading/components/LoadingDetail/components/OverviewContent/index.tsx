import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import FacultyLoadingSteps from "./components/FacultyLoadingSteps";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class OverviewContent extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography variant="h5">
                        {facultyLoading!.activeTerm!.readableString}
                    </Typography>
                </Grid>
                <Grid item>
                    <FacultyLoadingSteps />
                </Grid>
            </Grid>
        );
    }
}
