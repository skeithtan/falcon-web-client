import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import EmptyState from "../../components/reusable/EmptyState";
import StateWrapper from "../../components/reusable/StateWrapper";
import FacultyProfilesController from "../../controllers/faculty_profiles";
import IStyleClasses from "../../interfaces/style_classes";
import { FacultyProfilesState } from "../../store/faculty_profiles";
import AddFacultyMemberFormView from "./components/AddFacultyMemberForm";
import FacultyDetail from "./components/FacultyDetail/index";
import FacultyList from "./components/FacultyList/index";
import styles from "./styles";

interface IRouteParameters {
    facultyId?: string;
}

interface IPropsType extends RouteComponentProps<IRouteParameters> {
    classes: IStyleClasses;
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
class FacultyProfiles extends React.Component<IPropsType> {
    public componentDidMount() {
        document.title = "Faculty Profiles - Falcon";
        FacultyProfilesController.getAll();
    }

    public addFacultyMemberFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddFacultyMemberForm(shouldShow);
    };

    public renderFetched = () => {
        const {
            // match: { params },
            classes,
            facultyProfiles,
        } = this.props;

        const { facultyMembers } = facultyProfiles!;

        return (
            <React.Fragment>
                {facultyMembers!.length === 0 && (
                    <EmptyState
                        title="Faculty Profiles"
                        description="View and add faculty members, degrees, research presentations, instructional materials, academic recognitions, and extension works."
                        addButton="Add Faculty Member"
                        onButtonClick={this.addFacultyMemberFormToggle(true)}
                    />
                )}

                {facultyMembers!.length > 0 && (
                    <Grid
                        className={classes.root}
                        container
                        direction="row"
                        alignItems="stretch"
                        wrap="nowrap"
                    >
                        <React.Fragment>
                            <Grid item className={classes.list}>
                                <FacultyList />
                            </Grid>
                            <Grid item className={classes.detail}>
                                <FacultyDetail />
                            </Grid>
                        </React.Fragment>
                    </Grid>
                )}

                <AddFacultyMemberFormView />
            </React.Fragment>
        );
    };

    public render() {
        const { facultyProfiles } = this.props;
        return (
            <StateWrapper
                fetchableState={facultyProfiles!.fetchState}
                renderFetched={this.renderFetched}
            />
        );
    }
}

export default withStyles(styles)(FacultyProfiles);
