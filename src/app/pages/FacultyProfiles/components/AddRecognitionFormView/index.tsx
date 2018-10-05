import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
// import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyProfilesController from "../../../../controllers/faculty_profiles";
import { ProgramReadable } from "../../../../models/enums/program";
import { RecognitionBasisReadable } from "../../../../models/enums/recognition_basis";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";

/**
 * What's missing?
 * Form submit bar (including canSubmit prop)
 * onClickSubmit function
 * FacultyProfilesController function for adding a degree
 */

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class AddRecognitionFormView extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyProfilesController.toggleAddRecognitionForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addRecognitionFormState;
        form[property] = event.target.value;
    };

    public onAddMultiple = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addRecognitionFormState;
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
        } = facultyProfiles!.addRecognitionFormState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Academic Recognition"
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
                                label="Recognition Title"
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
                    <Grid item xs>
                        <TextField
                            select
                            label="Recognition Basis"
                            variant="outlined"
                            onChange={this.onChange("basis")}
                            value={form.basis}
                            error={"basis" in validationErrors}
                            helperText={validationErrors.basis}
                            fullWidth
                        >
                            {Array.from(RecognitionBasisReadable).map(
                                ([typeEnum, typeReadable]: any) => (
                                    <MenuItem key={typeEnum} value={typeEnum}>
                                        {typeReadable}
                                    </MenuItem>
                                )
                            )}
                        </TextField>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Recognition Date"
                            variant="outlined"
                            type="date"
                            onChange={this.onChange("date")}
                            value={form.date}
                            error={"date" in validationErrors}
                            helperText={validationErrors.date}
                            required
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Recognition Sponsor"
                                variant="outlined"
                                required
                                onChange={this.onChange("sponsor")}
                                value={form.sponsor}
                                error={"sponsor" in validationErrors}
                                helperText={validationErrors.sponsor}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
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
                </Grid>
            </DrawerForm>
        );
    }
}
