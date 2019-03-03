import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import SubjectCategory from "../../../../../../../../models/enums/subject_category";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import AddClassesTable from "./components/AddClassesTable";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

interface IStateType {
    activeStep: number;
}

@inject("facultyLoading")
@observer
class AddClassesDrawer extends React.Component<IPropsType, IStateType> {
    public state = {
        activeStep: 0,
    };

    public previousStep = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
        FacultyLoadingController.resetFormClasses();
    };

    public nextStep = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    public onClose = () => {
        FacultyLoadingController.toggleAddClassesDrawer(false);
        this.setState({
            activeStep: 0,
        });
    };

    public onOpen = () => {
        this.setState({
            activeStep: 0,
        });
    };

    public onSubjectChange = (event: any) => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        form.subjectId = event.target.value;
    };

    public onGenEdChange = (event: React.ChangeEvent, filter: boolean) => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: {
                addClassesDrawerState: { form },
            },
        } = facultyLoading!;
        form.filterGenEd = filter;
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
        const { activeStep } = this.state;

        const stepLabels = ["Select a subject", "Add classes"];

        let filteredSubjects = subjects;
        if (form.filterGenEd) {
            filteredSubjects = subjects!.filter(
                subject => subject.category === SubjectCategory.General
            );
        }

        const steps = [
            <Grid key="1" container direction="column" spacing={16}>
                <Grid item>
                    <TextField
                        key="1"
                        select
                        label="Subject"
                        variant="outlined"
                        onChange={this.onSubjectChange}
                        value={form.subjectId || ""}
                        error={"subjectId" in validationErrors}
                        helperText={validationErrors.subjectId}
                        fullWidth
                    >
                        {filteredSubjects &&
                            filteredSubjects.length > 0 &&
                            filteredSubjects.map(s => (
                                <MenuItem key={s.id} value={s.id}>
                                    {s.name}
                                </MenuItem>
                            ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={form.filterGenEd}
                                onChange={this.onGenEdChange}
                            />
                        }
                        label="General education subjects only"
                    />
                </Grid>
            </Grid>,
            <Grid container direction="column" spacing={24} key="2">
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
            </Grid>,
        ];

        return (
            <DrawerForm
                open={isShowing}
                formTitle="Add Classes"
                onClose={this.onClose}
                onOpen={this.onOpen}
                className={classes.drawer}
            >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {stepLabels.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Grid container direction="column" spacing={16}>
                                    <Grid item>{steps[index]}</Grid>
                                    <Grid item>
                                        <Button
                                            disabled={index === 0}
                                            onClick={this.previousStep}
                                        >
                                            Back
                                        </Button>
                                        {activeStep !== 1 && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.nextStep}
                                                disabled={!form.subjectId}
                                            >
                                                Proceed
                                            </Button>
                                        )}
                                    </Grid>
                                </Grid>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </DrawerForm>
        );
    }
}

export default withStyles(styles)(AddClassesDrawer);
