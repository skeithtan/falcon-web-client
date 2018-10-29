import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
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

// tslint:disable-next-line
const ReactToPrint = require("react-to-print");

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class PrintPreview extends React.Component<IPropsType> {
    public printRef?: any;

    public getTrigger = () => {
        const { classes } = this.props;
        return (
            <Button variant="extendedFab" className={classes.printButton}>
                Print Profile
            </Button>
        );
    };

    public getPrintContent = () => this.printRef;

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

        console.log(ReactToPrint);

        return (
            <div className={classes.root}>
                <Paper square className={classes.paper}>
                    <div
                        ref={(el: any) => (this.printRef = el)}
                        className={classes.printContentContainer}
                    >
                        <Grid container spacing={16} direction="column">
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
                                        <Typography variant="h6">{`${
                                            activeFacultyMember!.fullName
                                        }'s Profile`}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="overline"
                                            color="textSecondary"
                                        >
                                            Generated {moment().format("LLLL")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                spacing={24}
                                wrap="nowrap"
                            >
                                <Grid item>
                                    <PrintBasicInformation
                                        facultyMember={activeFacultyMember!}
                                    />
                                </Grid>
                                {withDegrees && (
                                    <Grid item>
                                        <Degrees
                                            degrees={
                                                activeFacultyMember!.degrees!
                                            }
                                        />
                                    </Grid>
                                )}
                                {withRecognitions && (
                                    <Grid item>
                                        <Recognitions
                                            recognitions={
                                                activeFacultyMember!
                                                    .recognitions!
                                            }
                                        />
                                    </Grid>
                                )}
                                {withPresentations && (
                                    <Grid item>
                                        <Presentations
                                            presentations={
                                                activeFacultyMember!
                                                    .presentations!
                                            }
                                        />
                                    </Grid>
                                )}
                                {withInstructionalMaterials && (
                                    <Grid item>
                                        <InstructionalMaterials
                                            instructionalMaterials={
                                                activeFacultyMember!
                                                    .instructionalMaterials!
                                            }
                                        />
                                    </Grid>
                                )}
                                {withExtensionWorks && (
                                    <Grid item>
                                        <ExtensionWorks
                                            extensionWorks={
                                                activeFacultyMember!
                                                    .extensionWorks!
                                            }
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </div>
                    <ReactToPrint
                        trigger={this.getTrigger}
                        content={this.getPrintContent}
                    />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(PrintPreview);
