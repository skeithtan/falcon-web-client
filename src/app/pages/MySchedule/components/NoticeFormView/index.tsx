import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class NoticeFormView extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleNoticeForm(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyLoading } = this.props;
        const {
            facultyTabState: { noticeFormState },
        } = facultyLoading!;
        const { form } = noticeFormState;
        form[property] = event.target.value;
    };

    public onSubmitClick = () => {
        FacultyLoadingController.submitNotice();
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            facultyTabState: { noticeFormState },
        } = facultyLoading!;
        const {
            isShowing,
            form,
            validationErrors,
            canSubmit,
        } = noticeFormState;
        return (
            <Dialog open={isShowing} onClose={this.onClose}>
                <DialogTitle>Submit Notice</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You have submitted feedback while the term is ongoing.
                        Indicate your reason below.
                    </DialogContentText>
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows="5"
                        rowsMax="10"
                        required
                        onChange={this.onChange("message")}
                        value={form.message}
                        error={"message" in validationErrors}
                        helperText={validationErrors.message}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        disabled={!canSubmit}
                        onClick={this.onSubmitClick}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
