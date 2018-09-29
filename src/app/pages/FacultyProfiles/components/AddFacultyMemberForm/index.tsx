import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FacultyProfilesController from "../../../../controllers/faculty_profiles";
import { ActivityTypeReadable } from "../../../../models/enums/activity_type";
import { FacultyMemberTypeReadable } from "../../../../models/enums/faculty_member_type";
import { SexReadable } from "../../../../models/enums/sex";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class AddFacultyMemberFormView extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyProfilesController.toggleAddFacultyMemberForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyProfiles } = this.props;
        const { addFacultyMemberForm } = facultyProfiles!;
        addFacultyMemberForm[property] = event.target.value;
    };

    public render() {
        const { facultyProfiles } = this.props;
        const {
            addFacultyMemberFormIsShowing,
            addFacultyMemberForm: form,
            addFacultyMemberValidation: validation,
        } = facultyProfiles!;

        return (
            <DrawerForm
                open={addFacultyMemberFormIsShowing}
                onClose={this.onClose}
                formTitle="Add Faculty Member"
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
                                label="First Name"
                                variant="outlined"
                                required
                                onChange={this.onChange("firstName")}
                                value={form.firstName}
                                error={"firstName" in validation}
                                helperText={validation.firstName}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                onChange={this.onChange("lastName")}
                                value={form.lastName}
                                error={"lastName" in validation}
                                helperText={validation.lastName}
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            onChange={this.onChange("email")}
                            value={form.email}
                            error={"email" in validation}
                            helperText={validation.email}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item container direction="row" spacing={8}>
                        <Grid item xs>
                            <TextField
                                label="Date of Birth"
                                variant="outlined"
                                type="date"
                                onChange={this.onChange("birthDate")}
                                value={form.birthDate}
                                error={"birthDate" in validation}
                                helperText={validation.birthDate}
                                required
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                select
                                label="Sex"
                                variant="outlined"
                                onChange={this.onChange("sex")}
                                value={form.sex}
                                error={"sex" in validation}
                                helperText={validation.sex}
                                fullWidth
                            >
                                {Array.from(SexReadable).map(
                                    ([typeEnum, typeReadable]: any) => (
                                        <MenuItem
                                            key={typeEnum}
                                            value={typeEnum}
                                        >
                                            {typeReadable}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" spacing={8}>
                        <Grid item xs>
                            <TextField
                                select
                                label="Faculty Member Type"
                                variant="outlined"
                                onChange={this.onChange("type")}
                                value={form.type}
                                error={"type" in validation}
                                helperText={validation.type}
                                fullWidth
                            >
                                {Array.from(FacultyMemberTypeReadable).map(
                                    ([typeEnum, typeReadable]: any) => (
                                        <MenuItem
                                            key={typeEnum}
                                            value={typeEnum}
                                        >
                                            {typeReadable}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                select
                                label="Activity Type"
                                variant="outlined"
                                value={form.activity}
                                onChange={this.onChange("activity")}
                                error={"activity" in validation}
                                helperText={validation.activity}
                                fullWidth
                            >
                                {Array.from(ActivityTypeReadable).map(
                                    ([typeEnum, typeReadable]: any) => (
                                        <MenuItem
                                            key={typeEnum}
                                            value={typeEnum}
                                        >
                                            {typeReadable}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item />
                    <Grid item>
                        <Button
                            variant="extendedFab"
                            color="primary"
                            size="large"
                            disabled={Object.keys(validation).length > 0}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
