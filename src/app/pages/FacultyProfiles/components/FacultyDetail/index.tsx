import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import BasicInformationView from "./components/BasicInformationView";
import DegreesView from "./components/DegreesView";
import ExtensionWorksView from "./components/ExtensionWorksView";
import FacultySubdocumentCard from "./components/FacultySubdocumentCard";
import InstructionalMaterialsView from "./components/InstructionalMaterialsView";
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

    public render() {
        const { classes, facultyProfiles } = this.props;
        const { activeFacultyMember } = facultyProfiles!;

        return (
            <div>
                {activeFacultyMember === undefined && (
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>Hey select someone</Grid>
                    </Grid>
                )}

                {activeFacultyMember !== undefined && (
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
                                facultyMember={activeFacultyMember}
                                canUpdate
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="Degrees"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <DegreesView
                                    degrees={activeFacultyMember.degrees!}
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="Academic Recognitions"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <RecognitionsView
                                    recognitions={
                                        activeFacultyMember.recognitions!
                                    }
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="Presentations"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <div>Something</div>
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="Instructional Materials"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <InstructionalMaterialsView
                                    instructionalMaterials={
                                        activeFacultyMember.instructionalMaterials!
                                    }
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="Extension Works"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <ExtensionWorksView
                                    extensionWorks={
                                        activeFacultyMember.extensionWorks!
                                    }
                                />
                            </FacultySubdocumentCard>
                        </Grid>
                    </Grid>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(FacultyDetail);
