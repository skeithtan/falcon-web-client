import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import SubjectsController from "../../../../controllers/subject";
import { ProgramReadable } from "../../../../models/enums/program";
import { SubjectCategoryReadable } from "../../../../models/enums/subject_category";
import { SubjectsState } from "../../../../store/subjects";

interface IPropsType {
    subjects?: SubjectsState;
}

@inject("subjects")
@observer
export default class AddSubjectFormView extends React.Component<IPropsType> {
    public onClose = () => {
        SubjectsController.toggleAddSubjectForm(false);
    };

    public onSubmitClick = () => {
        const { subjects } = this.props;
        const { form } = subjects!.addSubjectFormState;
        SubjectsController.create(form);
    };

    public onChange = (
        property: string
    ): React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > => event => {
        const { subjects } = this.props;
        const { form } = subjects!.addSubjectFormState;
        form[property] = event.target.value;
    };

    public render() {
        const { subjects } = this.props;
        const {
            isShowing,
            form,
            validationErrors,
            canSubmit,
        } = subjects!.addSubjectFormState;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Add Subject"
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
                                label="Code"
                                variant="outlined"
                                required
                                onChange={this.onChange("code")}
                                value={form.code}
                                error={"code" in validationErrors}
                                helperText={validationErrors.code}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Name"
                                variant="outlined"
                                required
                                onChange={this.onChange("name")}
                                value={form.name}
                                error={"name" in validationErrors}
                                helperText={validationErrors.name}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={8} direction="row">
                        <Grid item xs>
                            <TextField
                                label="Description"
                                variant="outlined"
                                required
                                onChange={this.onChange("description")}
                                value={form.description}
                                error={"description" in validationErrors}
                                helperText={validationErrors.description}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" spacing={8}>
                        <Grid item xs={4}>
                            <TextField
                                select
                                label="Category"
                                variant="outlined"
                                onChange={this.onChange("category")}
                                value={form.category}
                                error={"category" in validationErrors}
                                helperText={validationErrors.category}
                                fullWidth
                            >
                                {Array.from(SubjectCategoryReadable).map(
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
                    <Grid item container direction="row" spacing={8}>
                        <Grid item xs={4}>
                            <TextField
                                select
                                label="Program"
                                variant="outlined"
                                onChange={this.onChange("program")}
                                value={form.program}
                                error={"program" in validationErrors}
                                helperText={validationErrors.program}
                                fullWidth
                            >
                                {Array.from(ProgramReadable).map(
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
                            formState={subjects!.addSubjectFormState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
