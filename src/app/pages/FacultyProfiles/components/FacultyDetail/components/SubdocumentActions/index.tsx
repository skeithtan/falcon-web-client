import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { observer } from "mobx-react";
import * as React from "react";

interface IPropsType {
    ongoing: boolean;
    onOngoingChange: () => void;
    onRemoveClick: () => void;
}

@observer
export default class SubdoucmentActions extends React.Component<IPropsType> {
    public render() {
        const { ongoing, onOngoingChange, onRemoveClick } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={ongoing}
                                onChange={onOngoingChange}
                                value={ongoing}
                                color="primary"
                            />
                        }
                        label="Ongoing"
                    />
                </Grid>
                <Grid item>
                    <Button color="secondary" onClick={onRemoveClick}>
                        Remove
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
