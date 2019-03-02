import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
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
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignAdjunctDialogState },
        } = facultyLoading!;
        const { isShowing, validationErrors, form } = assignAdjunctDialogState;
        const emptyName = form.adjunctName === "";
        return (
            <Dialog open={isShowing} onClose={this.onClose}>
                <DialogTitle>Assign Adjunct Member</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the name of the invited adjunct faculty member to
                        be assigned to this class.
                    </DialogContentText>
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
