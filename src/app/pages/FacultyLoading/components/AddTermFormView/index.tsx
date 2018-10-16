import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import { OrdinalTermReadable } from "../../../../models/enums/ordinal_term";
import { FacultyLoadingState } from "../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class AddTermFormView extends React.Component<IPropsType> {
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
        const { facultyLoading } = this.props;
        const {
            isShowing,
            form,
            validationErrors,
            canSubmit,
        } = facultyLoading!.addTermState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Term"
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
                    </Grid>
                    <Grid item container spacing={8} direction="row">
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
                    <Grid item>
                        <FormSubmitBar
                            disabled={!canSubmit}
                            formState={facultyLoading!.addTermState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
