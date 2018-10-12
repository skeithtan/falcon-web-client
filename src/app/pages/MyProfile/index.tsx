import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "src/app/components/reusable/StateWrapper";
import MyProfileController from "src/app/controllers/my_profile";
import IStyleClasses from "src/app/interfaces/style_classes";
import { MyProfileState } from "src/app/store/my_profile";
import FacultyProfilesController from "../../controllers/faculty_profiles";
import BasicInformationView from "../FacultyProfiles/components/FacultyDetail/components/BasicInformationView";
import DegreesView from "../FacultyProfiles/components/FacultyDetail/components/DegreesView";
import ExtensionWorksView from "../FacultyProfiles/components/FacultyDetail/components/ExtensionWorksView";
import FacultySubdocumentCard from "../FacultyProfiles/components/FacultyDetail/components/FacultySubdocumentCard";
import InstructionalMaterialsView from "../FacultyProfiles/components/FacultyDetail/components/InstructionalMaterialsView";
import PresentationsView from "../FacultyProfiles/components/FacultyDetail/components/PresentationsView";
import RecognitionsView from "../FacultyProfiles/components/FacultyDetail/components/RecognitionsView";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    myProfile?: MyProfileState;
}

@inject("myProfile")
@observer
class MyProfile extends React.Component<IPropsType> {
    public componentDidMount() {
        document.title = "My Profile - Falcon";
        MyProfileController.getCurrentFaculty();
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
        const { classes, myProfile } = this.props;
        const { profile } = myProfile!;
        return (
            <StateWrapper fetchableState={myProfile!.fetchStatus} disableFlex>
                {() => (
                    <div className={classes.root}>
                        <Grid
                            container
                            className={classes.myProfileGrid}
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                            wrap="nowrap"
                            spacing={24}
                        >
                            <Grid item className={classes.item}>
                                <BasicInformationView
                                    facultyMember={profile}
                                    canUpdate
                                />
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={profile.degrees!.length === 0}
                                    name="Degrees"
                                    onAddClick={this.addDegreeFormToggle(true)}
                                    canAdd
                                >
                                    <DegreesView degrees={profile.degrees!} />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={profile.recognitions!.length === 0}
                                    name="Academic Recognitions"
                                    onAddClick={this.addRecognitionFormToggle(
                                        true
                                    )}
                                    canAdd
                                >
                                    <RecognitionsView
                                        recognitions={profile.recognitions!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={profile.presentations!.length === 0}
                                    name="Presentations"
                                    onAddClick={this.addPresentationFormToggle(
                                        true
                                    )}
                                    canAdd
                                >
                                    <PresentationsView
                                        presentations={profile.presentations!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={
                                        profile.instructionalMaterials!
                                            .length === 0
                                    }
                                    name="Instructional Materials"
                                    onAddClick={this.addInstructionalMaterialFormToggle(
                                        true
                                    )}
                                    canAdd
                                >
                                    <InstructionalMaterialsView
                                        instructionalMaterials={
                                            profile.instructionalMaterials!
                                        }
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={profile.extensionWorks!.length === 0}
                                    name="Extension Works"
                                    onAddClick={this.addExtensionWorkFormToggle(
                                        true
                                    )}
                                    canAdd
                                >
                                    <ExtensionWorksView
                                        extensionWorks={profile.extensionWorks!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(MyProfile);
