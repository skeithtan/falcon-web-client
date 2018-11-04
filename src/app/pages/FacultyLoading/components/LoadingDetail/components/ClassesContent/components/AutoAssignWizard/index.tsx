import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AutoAssignWizard extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleAutoAssignWizardDialog(false);
    };

    public onAssignClick = () => {
        FacultyLoadingController.autoAssignFaculty();
        this.onClose();
    };

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const { autoAssignWizardState } = classesTabState;
        return (
            <Dialog
                open={autoAssignWizardState.isShowing}
                onClose={this.onClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Auto-assign Wizard</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Assign faculty members to classes 'automagically'. Their
                        assignments will be based on their experience with the
                        subjects and their programs.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={this.onClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={this.onAssignClick}>
                        Auto Assign
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
