import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FormSubmitBar from "../../../../../../../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import FormClassSchedule from "../../../../../../../../../../models/entities/form_class_schedule";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    pendingClasses: FormClassSchedule[];
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
        const studentLevels = ["I", "II", "III", "IV"];
        const { facultyLoading, pendingClasses } = this.props;
        const {
            classesTabState: { addClassDialogState, classSchedules },
        } = facultyLoading!;
        const {
            isShowing,
            validationErrors,
            form,
            canSubmit,
        } = addClassDialogState;

        const consolidatedClasses = [
            ...Array.from(classSchedules!.values()),
            ...pendingClasses,
        ].filter(
            c =>
                c.meetingHours === form.meetingHours &&
                c.meetingDays === form.meetingDays
        );

        const noConflictingRoom = consolidatedClasses.every(
            pc => pc.room !== form.room
        );

        const noConflictingSection = consolidatedClasses.every(
            cs => cs.section !== form.section
        );

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
                        {!noConflictingRoom && (
                            <Grid item>
                                <Typography variant="subtitle2" color="error">
                                    The rooms conflict with another entry with
                                    the same day and time
                                </Typography>
                            </Grid>
                        )}
                        <Grid item container direction="row" spacing={8}>
                            <Grid item>
                                <TextField
                                    select
                                    label="Year"
                                    variant="outlined"
                                    onChange={this.onChange("studentYear")}
                                    value={form.studentYear}
                                    error={"studentYear" in validationErrors}
                                    helperText={validationErrors.studentYear}
                                    fullWidth
                                >
                                    {studentLevels.map(studentLevel => (
                                        <MenuItem
                                            key={studentLevel}
                                            value={String(
                                                studentLevels.indexOf(
                                                    studentLevel
                                                ) + 1
                                            )}
                                        >
                                            {studentLevel}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs>
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
                        </Grid>

                        {!noConflictingSection && (
                            <Grid item>
                                <Typography variant="subtitle2" color="error">
                                    The sections conflict with another entry
                                    with the same day and time
                                </Typography>
                            </Grid>
                        )}
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

                        <Grid item container direction="row" spacing={24}>
                            <Grid item>
                                <FormSubmitBar
                                    disabled={
                                        !canSubmit ||
                                        !noConflictingRoom ||
                                        !noConflictingSection
                                    }
                                    formState={addClassDialogState}
                                    onSubmitClick={this.onSubmitClick}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        );
    }
}
