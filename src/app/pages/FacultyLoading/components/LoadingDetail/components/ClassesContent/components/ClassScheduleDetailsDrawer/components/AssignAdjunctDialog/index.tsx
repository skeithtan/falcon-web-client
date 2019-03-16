import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AssignAdjunctDialog extends React.Component<IPropsType> {
    public state = {
        fromPrevious: true,
    };

    public toggleFromPrevious = () => {
        this.setState({
            fromPrevious: !this.state.fromPrevious,
        });
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignAdjunctDialogState },
        } = facultyLoading!;
        const { form } = assignAdjunctDialogState;
        form.adjunctName = "";
    };

    public onClose = () => {
        FacultyLoadingController.toggleAssignAdjunctDialog(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignAdjunctDialogState },
        } = facultyLoading!;
        const { form } = assignAdjunctDialogState;
        form[property] = event.target.value;
    };

    public onSubmit = () => {
        FacultyLoadingController.assignAdjunctToClass();
    };

    public render() {
        const { fromPrevious } = this.state;
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignAdjunctDialogState, adjunctNames },
        } = facultyLoading!;
        const { isShowing, validationErrors, form } = assignAdjunctDialogState;
        const emptyName = form.adjunctName === "";
        return (
            <Dialog open={isShowing} onClose={this.onClose}>
                <DialogTitle>Assign Adjunct Member</DialogTitle>
                <DialogContent>
                    <Grid container direction="column" spacing={16}>
                        <Grid item>
                            <DialogContentText>
                                Enter the name of the invited adjunct faculty
                                member to be assigned to this class.
                            </DialogContentText>
                        </Grid>
                        {fromPrevious &&
                            adjunctNames &&
                            adjunctNames!.length > 0 && (
                                <Grid item>
                                    <TextField
                                        select
                                        label="Faculty Member"
                                        variant="outlined"
                                        required
                                        onChange={this.onChange("adjunctName")}
                                        value={form.adjunctName}
                                        error={
                                            "adjunctName" in validationErrors
                                        }
                                        helperText={
                                            validationErrors.adjunctName
                                        }
                                        fullWidth
                                    >
                                        {adjunctNames &&
                                            adjunctNames!.map(an => (
                                                <MenuItem key={an} value={an}>
                                                    {an}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </Grid>
                            )}
                        {(fromPrevious && !adjunctNames) ||
                            (adjunctNames!.length === 0 && (
                                <Grid item>
                                    <Typography>
                                        There are no previous faculty members.
                                        Click the button below to add one.
                                    </Typography>
                                </Grid>
                            ))}
                        {!fromPrevious && (
                            <Grid item>
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    required
                                    onChange={this.onChange("adjunctName")}
                                    value={form.adjunctName}
                                    error={"adjunctName" in validationErrors}
                                    helperText={validationErrors.adjunctName}
                                    fullWidth
                                />
                            </Grid>
                        )}
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={this.toggleFromPrevious}
                            >
                                {fromPrevious
                                    ? "Add new member"
                                    : "Select from previous members"}
                            </Button>
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button color="secondary" onClick={this.onClose}>
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            disabled={emptyName}
                            onClick={this.onSubmit}
                        >
                            Assign
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
    }
}
