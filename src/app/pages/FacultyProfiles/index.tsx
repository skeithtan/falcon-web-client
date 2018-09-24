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

    public onAddButtonClick = () => {
        console.log("On add button click");
    };

    public renderFetched = () => {
        const {
            // match: { params },
            classes,
            facultyProfiles,
        } = this.props;

        console.log("Props", this.props);

        console.log(facultyProfiles!.facultyMembers);

        if (facultyProfiles!.facultyMembers!.length === 0) {
            return (
                <EmptyState
                    title="Faculty Profiles"
                    description="View and add faculty members, degrees, research presentations, instructional materials, academic recognitions, and extension works"
                    addButton="Add Faculty Member"
                    onButtonClick={this.onAddButtonClick}
                />
            );
        }

        return (
            <Grid
                className={classes.root}
                container
                direction="row"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid item className={classes.list}>
                    <FacultyList />
                </Grid>
                <Grid item className={classes.detail}>
                    <FacultyDetail />
                </Grid>
            </Grid>
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
