import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import AddClassesTable from "./components/AddClassesTable";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class AddClassesDrawer extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleAddClassesDrawer(false);
    };

    public onSubjectChange = (event: any) => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        form.subjectId = event.target.value;
    };

    public onAddClick = () => {
        FacultyLoadingController.toggleAddClassesDialog(true);
    };

    public onSubmitClick = () => {
        FacultyLoadingController.submitClasses();
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const {
            classesTabState: { addClassesDrawerState, subjects },
        } = facultyLoading!;
        const { isShowing, form, validationErrors } = addClassesDrawerState;
        return (
            <DrawerForm
                open={isShowing}
                formTitle="Add Classes"
                onClose={this.onClose}
                className={classes.drawer}
            >
                <Grid
                    container
                    direction="column"
                    spacing={16}
                    alignItems="stretch"
                >
                    <Grid item>
                        <TextField
                            select
                            label="Subject"
                            variant="outlined"
                            onChange={this.onSubjectChange}
                            value={form.subjectId || ""}
                            error={"subjectId" in validationErrors}
                            helperText={validationErrors.subjectId}
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
                    <Grid item>
                        <AddClassesTable onAddClick={this.onAddClick} />
                    </Grid>
                    <Grid item>
                        <FormSubmitBar
                            disabled={!form.subjectId || form.noClasses}
                            formState={addClassesDrawerState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}

export default withStyles(styles)(AddClassesDrawer);
