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
export default class UnassignedClassesDialog extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyLoadingController.toggleUnassignedClassesDialog(false);
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            classesTabState: {
                unassignedClassesDialogState: { isShowing },
            },
        } = facultyLoading!;
        return (
            <Dialog open={isShowing} onClose={this.onClose} fullWidth>
                <DialogTitle>Unassigned Classes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The following classes were not assigned during the
                        automatic assignment.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.onClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
