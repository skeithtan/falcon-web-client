import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import PrintPreviewDialog from "src/app/components/reusable/PrintPreviewDialog";
import StateWrapper from "../../../../components/reusable/StateWrapper";
import FacultyProfilesController from "../../../../controllers/faculty_profiles";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyMember from "../../../../models/entities/faculty_member";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import AddFacultyMemberFormView from "../AddFacultyMemberForm";
import AddDegreeFormView from "./AddDegreeFormView";
import AddExtensionWorkView from "./AddExtensionWorkView";
import AddInstructionalMaterialFormView from "./AddInstructionalMaterialFormView";
import AddPresentationFormView from "./AddPresentationFormView";
import AddRecognitionFormView from "./AddRecognitionFormView";
import BasicInformationView from "./components/BasicInformationView";
import DegreesView from "./components/DegreesView";
import ExtensionWorksView from "./components/ExtensionWorksView";
import FacultySubdocumentCard from "./components/FacultySubdocumentCard";
import InstructionalMaterialsView from "./components/InstructionalMaterialsView";
import PresentationsView from "./components/PresentationsView";
import RecognitionsView from "./components/RecognitionsView";
import PrintProfileView from "./PrintProfileView";
import styles from "./styles";
import UpdateFacultyMemberFormView from "./UpdateFacultyMemberFormView";

interface IPropsType {
    classes: IStyleClasses;
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
class FacultyDetail extends React.Component<IPropsType> {
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

    public renderEmptyState = () => {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.detailEmptyState}
            >
                <Typography variant="h5" color="textSecondary">
                    Select a faculty member to view their details
                </Typography>
            </Grid>
        );
    };

    public renderDetail = (fm: FacultyMember) => {
        const { classes, facultyProfiles } = this.props;
        const { profilePrintPreviewState } = facultyProfiles!;
        return (
            <StateWrapper fetchableState={fm.fetchStatus}>
                {() => (
                    <React.Fragment>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.detail}
                            spacing={24}
                        >
                            <Grid item className={classes.item}>
                                <BasicInformationView
                                    facultyMember={fm}
                                    canUpdate
                                />
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={fm.degrees!.length === 0}
                                    name="Degrees"
                                    onAddClick={this.addDegreeFormToggle(true)}
                                    canAdd={true}
                                >
                                    <DegreesView degrees={fm.degrees!} />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={fm.recognitions!.length === 0}
                                    name="Academic Recognitions"
                                    onAddClick={this.addRecognitionFormToggle(
                                        true
                                    )}
                                    canAdd={true}
                                >
                                    <RecognitionsView
                                        recognitions={fm.recognitions!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={fm.presentations!.length === 0}
                                    name="Presentations"
                                    onAddClick={this.addPresentationFormToggle(
                                        true
                                    )}
                                    canAdd={true}
                                >
                                    <PresentationsView
                                        presentations={fm.presentations!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={
                                        fm.instructionalMaterials!.length === 0
                                    }
                                    name="Instructional Materials"
                                    onAddClick={this.addInstructionalMaterialFormToggle(
                                        true
                                    )}
                                    canAdd={true}
                                >
                                    <InstructionalMaterialsView
                                        instructionalMaterials={
                                            fm.instructionalMaterials!
                                        }
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                            <Grid item className={classes.item}>
                                <FacultySubdocumentCard
                                    empty={fm.extensionWorks!.length === 0}
                                    name="Extension Works"
                                    onAddClick={this.addExtensionWorkFormToggle(
                                        true
                                    )}
                                    canAdd={true}
                                >
                                    <ExtensionWorksView
                                        extensionWorks={fm.extensionWorks!}
                                    />
                                </FacultySubdocumentCard>
                            </Grid>
                        </Grid>
                        <AddFacultyMemberFormView />
                        <AddDegreeFormView />
                        <AddExtensionWorkView />
                        <AddInstructionalMaterialFormView />
                        <AddPresentationFormView />
                        <AddRecognitionFormView />
                        <PrintPreviewDialog
                            title="Print Profile"
                            open={profilePrintPreviewState.isShowing}
                        >
                            <PrintProfileView />
                        </PrintPreviewDialog>
                        <UpdateFacultyMemberFormView />
                    </React.Fragment>
                )}
            </StateWrapper>
        );
    };

    public render() {
        const { facultyProfiles } = this.props;
        const { activeFacultyMember } = facultyProfiles!;

        return activeFacultyMember
            ? this.renderDetail(activeFacultyMember)
            : this.renderEmptyState();
    }
}

export default withStyles(styles)(FacultyDetail);
