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
import { FacultyProfilesState } from "../../../../store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class AddFacultyMemberForm extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyProfilesController.toggleAddFacultyMemberForm(false);
    };

    public render() {
        const { facultyProfiles } = this.props;
        return (
            <DrawerForm
                open={facultyProfiles!.addFacultyMemberFormIsShowing}
                onClose={this.onClose}
                formTitle="Add Faculty Member"
            >
                <Grid
                    container
                    spacing={16}
                    alignItems="stretch"
                    direction="column"
                >
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Date of Birth"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item container direction="row" spacing={8}>
                        <Grid item xs>
                            <TextField
                                select
                                label="Faculty Member Type"
                                variant="outlined"
                                fullWidth
                            >
                                <MenuItem value="">
                                    Select Faculty Member Type
                                </MenuItem>

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
                                fullWidth
                            >
                                <MenuItem value="">
                                    Select Activity Type
                                </MenuItem>

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
                    <Grid item/>
                    <Grid item>
                        <Button
                            variant="extendedFab"
                            color="primary"
                            size="large"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
