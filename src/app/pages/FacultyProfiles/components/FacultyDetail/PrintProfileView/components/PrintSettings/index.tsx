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
        const { profilePrintPreviewState: state } = facultyProfiles!;
        return (
            <FormControl component={"fieldset" as "div"} className={classes.form}>
                <FormLabel component="label">Print Profile Settings</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.withDegrees}
                                onChange={this.degreeChange(!state.withDegrees)}
                            />
                        }
                        label="Degrees"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.withRecognitions}
                                onChange={this.recognitionsChange(
                                    !state.withRecognitions
                                )}
                            />
                        }
                        label="Recognitions"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.withPresentations}
                                onChange={this.presentationsChange(
                                    !state.withPresentations
                                )}
                            />
                        }
                        label="Presentations"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.withInstructionalMaterials}
                                onChange={this.instructionalMaterialsChange(
                                    !state.withInstructionalMaterials
                                )}
                            />
                        }
                        label="Instructional Materials"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.withExtensionWorks}
                                onChange={this.extensionWorksChange(
                                    !state.withExtensionWorks
                                )}
                            />
                        }
                        label="Extension Works"
                    />
                </FormGroup>
            </FormControl>
        );
    }
}

export default withStyles(styles)(PrintSettings);
