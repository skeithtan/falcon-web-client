import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "src/app/components/reusable/StateWrapper";
import IStyleClasses from "src/app/interfaces/style_classes";
import { FacultyProfilesState } from "src/app/store/faculty_profiles";
import FacultyProfilesController from "../../controllers/faculty_profiles";
import FacultyDetail from "../FacultyProfiles/components/FacultyDetail";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    facultyProfiles: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
class MyProfile extends React.Component<IPropsType> {
    public componentDidMount() {
        document.title = "My Profile - Falcon";
        FacultyProfilesController.getCurrentFaculty();
    }

    public addDegreeFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddDegreeForm(shouldShow);
    };

    public addExtensionWorkFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddExtensionWorkForm(shouldShow);
    };

    public addInstructionalMaterialFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddInstructionalMaterialForm(
            shouldShow
        );
    };

    public addPresentationFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddPresentationForm(shouldShow);
    };

    public addRecognitionFormToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleAddRecognitionForm(shouldShow);
    };

    public render() {
        const { facultyProfiles, classes } = this.props;
        return (
            <StateWrapper
                fetchableState={facultyProfiles!.fetchStatus}
                disableFlex
            >
                {() => (
                    <div className={classes.root}>
                        <FacultyDetail />
                    </div>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(MyProfile);
