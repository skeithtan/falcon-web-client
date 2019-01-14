import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";
import FormStatus from "../../../../../../../../../../models/enums/form_status";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import FacultyDialogItem from "../FacultyDialogItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AssignFacultyDialog extends React.Component<IPropsType> {
    public onEntering() {
        FacultyLoadingController.getAllFaculties();
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

    public onSubmitClick = (fm?: FacultyProfile) => () => {
        FacultyLoadingController.assignFacultyToClass(fm!.id);
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const {
            form,
            isShowing,
            recommendedFaculties,
            allFaculties,
        } = assignFacultyDialogState;
        const isSubmitting =
            assignFacultyDialogState.status === FormStatus.Submitting;
        return (
            <Dialog
                open={isShowing}
                onClose={this.onClose}
                onEntering={this.onEntering}
                fullWidth
                maxWidth="lg"
            >
                <DialogTitle>Assign Faculty Member</DialogTitle>
                <DialogContent>
                    {!isSubmitting && (
                        <StateWrapper
                            fetchableState={
                                assignFacultyDialogState.fetchStatus
                            }
                        >
                            {() => (
                                <React.Fragment>
                                    {recommendedFaculties === undefined ||
                                        (recommendedFaculties!.length === 0 && (
                                            <Typography variant="overline">
                                                No faculty members recommended
                                                for assignment.
                                            </Typography>
                                        ))}
                                    {recommendedFaculties !== undefined &&
                                        recommendedFaculties!.length > 0 && (
                                            <React.Fragment>
                                                <DialogContentText>
                                                    Select a recommended faculty
                                                    member.
                                                </DialogContentText>
                                                <List>
                                                    {recommendedFaculties!.map(
                                                        fm => (
                                                            <FacultyDialogItem
                                                                key={fm.id}
                                                                facultyMember={
                                                                    fm
                                                                }
                                                                onClick={this.onChange(
                                                                    fm
                                                                )}
                                                            />
                                                        )
                                                    )}
                                                </List>
                                            </React.Fragment>
                                        )}

                                    {allFaculties === undefined ||
                                        (allFaculties!.length === 0 && (
                                            <Typography variant="overline">
                                                No other faculty members
                                                available for assignment.
                                            </Typography>
                                        ))}
                                    {allFaculties !== undefined &&
                                        allFaculties!.length > 0 && (
                                            <React.Fragment>
                                                <DialogContentText>
                                                    Select a faculty member.
                                                </DialogContentText>
                                                <List>
                                                    {allFaculties!.map(fm => (
                                                        <FacultyDialogItem
                                                            key={fm.id}
                                                            facultyMember={fm}
                                                            onClick={this.onChange(
                                                                fm
                                                            )}
                                                        />
                                                    ))}
                                                </List>
                                            </React.Fragment>
                                        )}
                                </React.Fragment>
                            )}
                        </StateWrapper>
                    )}
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {isSubmitting && <CircularProgress size={80} />}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.onClose}
                        color="secondary"
                        disabled={isSubmitting}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={!form.facultyMember || isSubmitting}
                        onClick={this.onSubmitClick(form.facultyMember)}
                        color="primary"
                    >
                        Assign
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
