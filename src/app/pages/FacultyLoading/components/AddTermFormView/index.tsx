import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../interfaces/style_classes";
import { OrdinalTermReadable } from "../../../../models/enums/ordinal_term";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class AddTermFormView extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleAddTermForm(false);
    };

    public onSubmitClick = () => FacultyLoadingController.submitAddTerm();

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { facultyLoading } = this.props;
        const { form } = facultyLoading!.addTermState;
        form[property] = event.target.value;
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const {
            isShowing,
            form,
            validationErrors,
            canSubmit,
        } = facultyLoading!.addTermState;
        return (
            <Dialog open={isShowing} onClose={this.onClose} fullWidth>
                <DialogTitle>Add Term</DialogTitle>
                <DialogContent className={classes.content}>
                    <Grid container direction="column">
                        <Grid item container spacing={8} direction="row">
                            <Grid item xs>
                                <TextField
                                    label="Start Year"
                                    variant="outlined"
                                    required
                                    onChange={this.onChange("startYear")}
                                    value={form.startYear}
                                    error={"startYear" in validationErrors}
                                    helperText={validationErrors.startYear}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    select
                                    label="Term"
                                    variant="outlined"
                                    onChange={this.onChange("term")}
                                    value={form.term}
                                    error={"term" in validationErrors}
                                    helperText={validationErrors.term}
                                    fullWidth
                                >
                                    {Array.from(OrdinalTermReadable).map(
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
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Grid container direction="row-reverse">
                        <Grid item>
                            <FormSubmitBar
                                disabled={!canSubmit}
                                formState={facultyLoading!.addTermState}
                                onSubmitClick={this.onSubmitClick}
                            />
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(AddTermFormView);
