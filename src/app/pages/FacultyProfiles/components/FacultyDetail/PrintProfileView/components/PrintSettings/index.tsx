import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import { FacultyProfilesState } from "src/app/store/faculty_profiles";
import IStyleClasses from "../../../../../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class PrintSettings extends React.Component<IPropsType> {
    public degreeChange = (include: boolean) => () => {
        FacultyProfilesController.toggleIncludeDegrees(include);
    };

    public recognitionsChange = (include: boolean) => () => {
        FacultyProfilesController.toggleIncludeRecognitions(include);
    };

    public presentationsChange = (include: boolean) => () => {
        FacultyProfilesController.toggleIncludePresentations(include);
    };

    public instructionalMaterialsChange = (include: boolean) => () => {
        FacultyProfilesController.toggleIncludeInstructionalMaterials(include);
    };

    public extensionWorksChange = (include: boolean) => () => {
        FacultyProfilesController.toggleIncludeExtensionWorks(include);
    };

    public render() {
        const { facultyProfiles, classes } = this.props;
        const { profilePrintPreviewState } = facultyProfiles!;
        return (
            <React.Fragment>
                <FormControl component="fieldset" className={classes.form}>
                    <FormLabel component="legend">
                        Print Profile Settings
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={
                                        profilePrintPreviewState.withDegrees
                                    }
                                    onChange={this.degreeChange(
                                        !profilePrintPreviewState.withDegrees
                                    )}
                                />
                            }
                            label="Degrees"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={
                                        profilePrintPreviewState.withRecognitions
                                    }
                                    onChange={this.recognitionsChange(
                                        !profilePrintPreviewState.withRecognitions
                                    )}
                                />
                            }
                            label="Recognitions"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={
                                        profilePrintPreviewState.withPresentations
                                    }
                                    onChange={this.presentationsChange(
                                        !profilePrintPreviewState.withPresentations
                                    )}
                                />
                            }
                            label="Presentations"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={
                                        profilePrintPreviewState.withInstructionalMaterials
                                    }
                                    onChange={this.instructionalMaterialsChange(
                                        !profilePrintPreviewState.withInstructionalMaterials
                                    )}
                                />
                            }
                            label="Instructional Materials"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={
                                        profilePrintPreviewState.withExtensionWorks
                                    }
                                    onChange={this.extensionWorksChange(
                                        !profilePrintPreviewState.withExtensionWorks
                                    )}
                                />
                            }
                            label="Extension Works"
                        />
                    </FormGroup>
                </FormControl>
                <Button variant="contained" color="primary">
                    Print Profile
                </Button>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PrintSettings);
