import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import FormStatus from "../../../models/enums/form_status";

interface IPropsType {
    disabled: boolean;
    onSubmitClick: () => any;
    formStatus: FormStatus;
    submitText?: string;
}

export default class FormSubmitBar extends React.Component<IPropsType> {
    public render() {
        const { disabled, onSubmitClick, submitText = "Submit" } = this.props;
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
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid>
        );
    }
}
