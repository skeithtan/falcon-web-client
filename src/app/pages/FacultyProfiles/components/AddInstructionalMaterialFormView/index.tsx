import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyProfilesController from "../../../../controllers/faculty_profiles";
import { InstructionalMaterialAudienceReadable } from "../../../../models/enums/instructional_material_audience";
import { InstructionalMaterialMediumReadable } from "../../../../models/enums/instructional_material_medium";
import { ProgramReadable } from "../../../../models/enums/program";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";

/**
 * What's missing?
 * onClickSubmit function
 * FacultyProfilesController function for adding a degree
 */

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class AddInstructionalMaterialFormView extends React.Component<
    IPropsType
> {
    public onSubmitClick = () => {
        // This is temporary
        global.console.log("Thank you Oliver, very cool.");
    };

    public onClose = () => {
        FacultyProfilesController.toggleAddInstructionalMaterialForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addInstructionalMaterialFormState;
        form[property] = event.target.value;
    };

    public onAddMultiple = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addInstructionalMaterialFormState;
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
        } = facultyProfiles!.addInstructionalMaterialFormState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Instructional Material"
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
                                label="Instructional Material Title"
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
                                select
                                label="Instructional Material Medium"
                                variant="outlined"
                                onChange={this.onChange("medium")}
                                value={form.medium}
                                error={"medium" in validationErrors}
                                helperText={validationErrors.medium}
                                fullWidth
                            >
                                {Array.from(
                                    InstructionalMaterialMediumReadable
                                ).map(([typeEnum, typeReadable]: any) => (
                                    <MenuItem key={typeEnum} value={typeEnum}>
                                        {typeReadable}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                select
                                label="Instructional Material Audience"
                                variant="outlined"
                                onChange={this.onChange("audience")}
                                value={form.audience}
                                error={"audience" in validationErrors}
                                helperText={validationErrors.audience}
                                fullWidth
                            >
                                {Array.from(
                                    InstructionalMaterialAudienceReadable
                                ).map(([typeEnum, typeReadable]: any) => (
                                    <MenuItem key={typeEnum} value={typeEnum}>
                                        {typeReadable}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Instructional Material Usage Year"
                            variant="outlined"
                            required
                            onChange={this.onChange("usageYear")}
                            value={form.usageYear}
                            error={"usageYear" in validationErrors}
                            helperText={validationErrors.usageYear}
                            fullWidth
                        />
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <FormControl
                                required
                                error={"level" in validationErrors}
                                component="fieldset"
                            >
                                <FormLabel component="legend">
                                    Instructional Material Level
                                </FormLabel>
                                <RadioGroup
                                    value={form.level}
                                    onChange={this.onChange("level")}
                                >
                                    <FormControlLabel
                                        control={<Radio />}
                                        value="1"
                                        label="1"
                                    />
                                    <FormControlLabel
                                        control={<Radio />}
                                        value="2"
                                        label="2"
                                    />
                                    <FormControlLabel
                                        control={<Radio />}
                                        value="3"
                                        label="3"
                                    />
                                    <FormControlLabel
                                        control={<Radio />}
                                        value="4"
                                        label="4"
                                    />
                                </RadioGroup>
                                <FormHelperText>
                                    {validationErrors.level}
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
                        <FormSubmitBar
                            disabled={!canSubmit}
                            formState={
                                facultyProfiles!
                                    .addInstructionalMaterialFormState
                            }
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
