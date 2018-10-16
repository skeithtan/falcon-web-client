import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyProfilesState } from "src/app/store/faculty_profiles";
import PrintPreviewHead from "../../../../../../../components/reusable/PrintPreviewHead";
import IStyleClasses from "../../../../../../../interfaces/style_classes";
import Degrees from "../Degrees";
import ExtensionWorks from "../ExtensionWorks";
import InstructionalMaterials from "../InstructionalMaterials";
import Presentations from "../Presentations";
import PrintBasicInformation from "../PrintBasicInformation";
import Recognitions from "../Recognitions";
import styles from "./styles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class PrintPreview extends React.Component<IPropsType> {
    public render() {
        const { facultyProfiles, classes } = this.props;
        const {
            activeFacultyMember,
            profilePrintPreviewState,
        } = facultyProfiles!;
        const {
            withDegrees,
            withRecognitions,
            withPresentations,
            withInstructionalMaterials,
            withExtensionWorks,
        } = profilePrintPreviewState;
        return (
            <Grid container direction="column" className={classes.root}>
                <Grid item container direction="column">
                    <Grid item>
                        <PrintPreviewHead />
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography component="h4">{`${
                                activeFacultyMember!.user!.fullName
                            }'s Profile`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="h6" color="textSecondary">
                                Generation Date
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" spacing={16}>
                    <Grid item>
                        <PrintBasicInformation
                            facultyMember={activeFacultyMember!}
                        />
                    </Grid>
                    <Grid item>
                        {withDegrees && (
                            <Degrees degrees={activeFacultyMember!.degrees!} />
                        )}
                    </Grid>
                    <Grid item>
                        {withRecognitions && (
                            <Recognitions
                                recognitions={
                                    activeFacultyMember!.recognitions!
                                }
                            />
                        )}
                    </Grid>
                    <Grid item>
                        {withPresentations && (
                            <Presentations
                                presentations={
                                    activeFacultyMember!.presentations!
                                }
                            />
                        )}
                    </Grid>
                    <Grid item>
                        {withInstructionalMaterials && (
                            <InstructionalMaterials
                                instructionalMaterials={
                                    activeFacultyMember!.instructionalMaterials!
                                }
                            />
                        )}
                    </Grid>
                    <Grid item>
                        {withExtensionWorks && (
                            <ExtensionWorks
                                extensionWorks={
                                    activeFacultyMember!.extensionWorks!
                                }
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PrintPreview);
