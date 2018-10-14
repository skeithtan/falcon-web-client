import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Switch from "@material-ui/core/Switch";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import { FacultyProfilesState } from "src/app/store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class PrintSettings extends React.Component<IPropsType> {
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
        const { facultyProfiles } = this.props;
        const { profilePrintPreviewState } = facultyProfiles!;
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Print Profile Settings</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={profilePrintPreviewState.withDegrees}
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
        );
    }
}
