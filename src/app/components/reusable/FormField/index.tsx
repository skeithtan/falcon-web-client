import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import { ValidationError } from "class-validator";
import * as React from "react";

interface IPropsType {
    label: string;
    input: React.ReactNode;
    error?: ValidationError;
    fullWidth?: boolean;
    required?: boolean;
}

export default class FormField extends React.Component<IPropsType> {
    public render() {
        const { label, input, error, fullWidth, required } = this.props;
        return (
            <FormControl
                error={error !== undefined}
                fullWidth={fullWidth}
                required={required}
            >
                <InputLabel>{label}</InputLabel>
                {input}
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        );
    }
}
