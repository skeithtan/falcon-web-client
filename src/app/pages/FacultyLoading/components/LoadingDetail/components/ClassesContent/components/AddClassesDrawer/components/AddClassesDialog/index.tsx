import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FormSubmitBar from "../../../../../../../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AddClassesDialog extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleAddClassesDialog(false);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyLoading } = this.props;
        const { form } = facultyLoading!.classesTabState.addClassDialogState;
        form[property] = event.target.value;
    };

    public onSubmitClick = () => {
        FacultyLoadingController.addClassToForm();
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { addClassDialogState },
        } = facultyLoading!;
        const {
            isShowing,
            validationErrors,
            form,
            canSubmit,
        } = addClassDialogState;
        return (
            <Dialog
                open={isShowing}
                onClose={this.onClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Add Class</DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        direction="column"
                        spacing={24}
                        alignItems="stretch"
                    >
                        <Grid item>
                            <TextField
                                select
                                label="Meeting Days"
                                variant="outlined"
                                onChange={this.onChange("meetingDays")}
                                value={form.meetingDays}
                                error={"meetingDays" in validationErrors}
                                helperText={validationErrors.meetingDays}
                                fullWidth
                            >
                                {Array.from(MeetingDaysReadable).map(
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
                        <Grid item>
                            <TextField
                                select
                                label="Meeting Hours"
                                variant="outlined"
                                onChange={this.onChange("meetingHours")}
                                value={form.meetingHours}
                                error={"meetingHours" in validationErrors}
                                helperText={validationErrors.meetingHours}
                                fullWidth
                            >
                                {Array.from(MeetingHoursReadable).map(
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
                        <Grid item>
                            <TextField
                                label="Room"
                                variant="outlined"
                                required
                                onChange={this.onChange("room")}
                                value={form.room}
                                error={"room" in validationErrors}
                                helperText={validationErrors.room}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Section"
                                variant="outlined"
                                required
                                onChange={this.onChange("section")}
                                value={form.section}
                                error={"section" in validationErrors}
                                helperText={validationErrors.section}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Course"
                                variant="outlined"
                                required
                                onChange={this.onChange("course")}
                                value={form.course}
                                error={"course" in validationErrors}
                                helperText={validationErrors.course}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <FormSubmitBar
                                disabled={!canSubmit}
                                formState={addClassDialogState}
                                onSubmitClick={this.onSubmitClick}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        );
    }
}
