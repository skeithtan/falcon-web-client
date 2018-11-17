import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../../components/reusable/FormSubmitBar";
import FacultyProfilesController from "../../../../../controllers/faculty_profiles";
import { ExtensionWorkRoleReadable } from "../../../../../models/enums/extension_work_role";
import { ProgramReadable } from "../../../../../models/enums/program";
import { FacultyProfilesState } from "../../../../../store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class AddExtensionWorkView extends React.Component<IPropsType> {
    public onSubmitClick = () =>
        FacultyProfilesController.submitAddExtensionWork();

    public onClose = () => {
        FacultyProfilesController.toggleAddExtensionWorkForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addExtensionWorkFormState;
        form[property] = event.target.value;
    };

    public onOngoingChange = (ongoing: boolean) => (event: any) => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addExtensionWorkFormState;
        form.ongoing = ongoing;
    };

    public onAddMultiple = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addExtensionWorkFormState;
        if (form[property].includes(event.target.value)) {
            const index = form[property].indexOf(event.target.value);
            form[property].splice(index, 1);
        } else {
            form[property].push(event.target.value);
        }
    };

    public render() {
        const { facultyProfiles } = this.props;
        const {
            isShowing,
            validationErrors,
            form,
            canSubmit,
        } = facultyProfiles!.addExtensionWorkFormState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Extension Work"
            >
                <Grid
                    container
                    spacing={24}
                    alignItems="stretch"
                    direction="column"
                >
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Title"
                                variant="outlined"
                                required
                                onChange={this.onChange("title")}
                                value={form.title}
                                error={"title" in validationErrors}
                                helperText={validationErrors.title}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Venue"
                                variant="outlined"
                                required
                                onChange={this.onChange("venue")}
                                value={form.venue}
                                error={"venue" in validationErrors}
                                helperText={validationErrors.venue}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <FormControl
                                required
                                error={"roles" in validationErrors}
                                component="fieldset"
                            >
                                <FormLabel component="legend">Roles</FormLabel>
                                <FormGroup>
                                    {Array.from(ExtensionWorkRoleReadable).map(
                                        ([typeEnum, typeReadable]: any) => (
                                            <FormControlLabel
                                                key={typeEnum}
                                                control={
                                                    <Checkbox
                                                        checked={form.roles.includes(
                                                            typeEnum
                                                        )}
                                                        onChange={this.onAddMultiple(
                                                            "roles"
                                                        )}
                                                        value={typeEnum}
                                                    />
                                                }
                                                label={typeReadable}
                                            />
                                        )
                                    )}
                                </FormGroup>
                                <FormHelperText>
                                    {validationErrors.roles}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs>
                            <FormControl
                                required
                                error={"associatedPrograms" in validationErrors}
                                component="fieldset"
                            >
                                <FormLabel component="legend">
                                    Associated Programs
                                </FormLabel>
                                <FormGroup>
                                    {Array.from(ProgramReadable).map(
                                        ([typeEnum, typeReadable]: any) => (
                                            <FormControlLabel
                                                key={typeEnum}
                                                control={
                                                    <Checkbox
                                                        checked={form.associatedPrograms.includes(
                                                            typeEnum
                                                        )}
                                                        onChange={this.onAddMultiple(
                                                            "associatedPrograms"
                                                        )}
                                                        value={typeEnum}
                                                    />
                                                }
                                                label={typeReadable}
                                            />
                                        )
                                    )}
                                </FormGroup>
                                <FormHelperText>
                                    {validationErrors.associatedPrograms}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={form.ongoing}
                                    onChange={this.onOngoingChange(
                                        !form.ongoing
                                    )}
                                    value={form.ongoing}
                                    color="primary"
                                />
                            }
                            label="Ongoing"
                        />
                    </Grid>
                    <Grid item>
                        <FormSubmitBar
                            disabled={!canSubmit}
                            formState={
                                facultyProfiles!.addExtensionWorkFormState
                            }
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
