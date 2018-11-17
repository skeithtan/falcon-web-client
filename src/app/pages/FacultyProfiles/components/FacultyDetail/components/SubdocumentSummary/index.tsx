import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";

interface IPropsType {
    title: string;
    ongoing: boolean;
}

@observer
export default class SubdocumentSummary extends React.Component<IPropsType> {
    public render() {
        const { title, ongoing } = this.props;
        return (
            <Grid container direction="row" alignItems="center" spacing={24}>
                <Grid item>
                    <Typography variant="subtitle1">{title}</Typography>
                </Grid>
                <Grid item>
                    {ongoing && (
                        <Chip
                            label="Ongoing"
                            variant="outlined"
                            color="primary"
                        />
                    )}
                </Grid>
            </Grid>
        );
    }
}
