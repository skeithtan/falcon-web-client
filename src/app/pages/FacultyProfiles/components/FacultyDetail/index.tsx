import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../components/reusable/StateWrapper";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyMember from "../../../../models/entities/faculty_member";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import BasicInformationView from "./components/BasicInformationView";
import DegreesView from "./components/DegreesView";
import ExtensionWorksView from "./components/ExtensionWorksView";
import FacultySubdocumentCard from "./components/FacultySubdocumentCard";
import InstructionalMaterialsView from "./components/InstructionalMaterialsView";
import PresentationsView from "./components/PresentationsView";
import RecognitionsView from "./components/RecognitionsView";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
class FacultyDetail extends React.Component<IPropsType> {
    public temporaryAddClick() {
        global.console.log("Cool! You wanna add something!");
    }

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
                <Typography variant="headline" color="textSecondary">
                    Select a faculty member to view their details
                </Typography>
            </Grid>
        );
    };

    public renderDetail = (fm: FacultyMember) => {
        const { classes } = this.props;
        return (
            <StateWrapper fetchableState={fm.fetchStatus}>
                {() => (
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
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <DegreesView degrees={fm.degrees!} />
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={fm.recognitions!.length === 0}
                                name="Academic Recognitions"
                                onAddClick={this.temporaryAddClick}
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
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <PresentationsView
                                    presentations={fm.presentations!}
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={fm.instructionalMaterials!.length === 0}
                                name="Instructional Materials"
                                onAddClick={this.temporaryAddClick}
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
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <ExtensionWorksView
                                    extensionWorks={fm.extensionWorks!}
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                    </Grid>
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
