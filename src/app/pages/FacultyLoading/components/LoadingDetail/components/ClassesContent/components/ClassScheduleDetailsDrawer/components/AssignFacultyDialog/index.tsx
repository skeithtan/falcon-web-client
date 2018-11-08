import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import FacultyDialogItem from "../FacultyDialogItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AssignFacultyDialog extends React.Component<IPropsType> {
    public onEntering() {
        FacultyLoadingController.getRecommendedFaculties();
    }

    public onClose = () => {
        FacultyLoadingController.toggleAssignFacultyDialog(false);
    };

    public onChange = (fm: FacultyProfile) => () => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const { form } = assignFacultyDialogState;
        form.facultyMember = fm;
    };

    public onSubmitClick = () => {
        // TODO: This
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const { isShowing, facultyMembers } = assignFacultyDialogState;
        return (
            <Dialog
                open={isShowing}
                onClose={this.onClose}
                onEntering={this.onEntering}
                fullWidth
            >
                <DialogTitle>Assign Faculty Member</DialogTitle>
                <StateWrapper
                    fetchableState={assignFacultyDialogState.fetchStatus}
                >
                    {() => (
                        <DialogContent>
                            <DialogContentText>
                                Select a faculty member.
                            </DialogContentText>
                            <React.Fragment>
                                {facultyMembers === undefined && (
                                    <Typography variant="overline">
                                        No faculty members available for
                                        assignment.
                                    </Typography>
                                )}

                                {facultyMembers !== undefined && (
                                    <List>
                                        {facultyMembers!.map(fm => (
                                            <FacultyDialogItem
                                                key={fm.id}
                                                facultyMember={fm}
                                                onClick={this.onChange(fm)}
                                            />
                                        ))}
                                    </List>
                                )}
                            </React.Fragment>
                        </DialogContent>
                    )}
                </StateWrapper>
                <DialogActions>
                    <Button onClick={this.onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.onSubmitClick} color="primary">
                        Assign
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
