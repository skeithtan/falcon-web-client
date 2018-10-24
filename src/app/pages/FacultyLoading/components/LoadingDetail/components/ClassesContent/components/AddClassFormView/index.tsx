import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import { MeetingDaysReadable } from "../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AddClassFormView extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleAddClassForm(false);
    };

    public onSubmitClick = () => {
        FacultyLoadingController.submitAddClass();
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyLoading } = this.props;
        const { form } = facultyLoading!.addClassState;
        form[property] = event.target.value;
    };

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState, addClassState } = facultyLoading!;
        const { subjects } = classesTabState;
        const { isShowing, form, validationErrors, canSubmit } = addClassState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Class"
            >
                <Grid
                    container
                    spacing={24}
                    alignItems="stretch"
                    direction="column"
                >
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                select
                                label="Subject"
                                variant="outlined"
                                onChange={this.onChange("subject")}
                                value={form.subject || ""}
                                error={"subject" in validationErrors}
                                helperText={validationErrors.subject}
                                fullWidth
                            >
                                {subjects &&
                                    subjects.length > 0 &&
                                    subjects.map(s => (
                                        <MenuItem key={s.id} value={s.id}>
                                            {s.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
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
                        <Grid item xs>
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
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
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
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
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
                    </Grid>
                    <Grid item>
                        <FormSubmitBar
                            disabled={!canSubmit}
                            formState={facultyLoading!.addClassState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
