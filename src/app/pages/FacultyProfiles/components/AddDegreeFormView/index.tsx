import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
// import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyProfilesController from "../../../../controllers/faculty_profiles";
import { DegreeLevelReadable } from "../../../../models/enums/degree_level";
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
export default class AddDegreeFormView extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyProfilesController.toggleAddDegreeForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { form } = facultyProfiles!.addDegreeFormState;
        form[property] = event.target.value;
    };

    public render() {
        const { facultyProfiles } = this.props;
        const {
            isShowing,
            validationErrors,
            form,
        } = facultyProfiles!.addDegreeFormState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Degree"
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
                                label="Degree Title"
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
                            label="Degree Level"
                            variant="outlined"
                            onChange={this.onChange("level")}
                            value={form.level}
                            error={"level" in validationErrors}
                            helperText={validationErrors.level}
                            fullWidth
                        >
                            {Array.from(DegreeLevelReadable).map(
                                ([typeEnum, typeReadable]: any) => (
                                    <MenuItem key={typeEnum} value={typeEnum}>
                                        {typeReadable}
                                    </MenuItem>
                                )
                            )}
                        </TextField>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Degree Completion Year"
                                variant="outlined"
                                required
                                onChange={this.onChange("completionYear")}
                                value={form.completionYear}
                                error={"completionYear" in validationErrors}
                                helperText={validationErrors.completionYear}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}