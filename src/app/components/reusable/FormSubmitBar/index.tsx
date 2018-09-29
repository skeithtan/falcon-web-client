import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import FormState from "../../../interfaces/form_state";
import FormStatus from "../../../models/enums/form_status";

interface IPropsType {
    disabled: boolean;
    onSubmitClick: () => any;
    formState: FormState<any>;
    submitText?: string;
}

@observer
export default class FormSubmitBar extends React.Component<IPropsType> {
    public render() {
        const {
            disabled,
            onSubmitClick,
            submitText = "Submit",
            formState: { status, submissionError },
        } = this.props;
        return (
            <Grid container direction="row" alignItems="center" spacing={16}>
                <Grid item>
                    <Button
                        variant="extendedFab"
                        color="primary"
                        size="large"
                        disabled={disabled}
                        onClick={onSubmitClick}
                    >
                        {submitText}
                    </Button>
                </Grid>
                {status === FormStatus.Submitting && (
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                )}
                {submissionError && (
                    <Grid item>
                        <Typography color="error">{submissionError}</Typography>
                    </Grid>
                )}
            </Grid>
        );
    }
}
