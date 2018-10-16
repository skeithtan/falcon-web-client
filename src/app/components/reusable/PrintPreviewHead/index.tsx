import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import pnuLogo from "../../../../assets/images/pnu-logo.png";
import IStyleClasses from "../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class PrintPreviewHead extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="row"
                wrap="nowrap"
                alignItems="center"
                spacing={16}
            >
                <Grid item>
                    <img
                        src={pnuLogo}
                        alt="PNU Logo"
                        className={classes.pnuLogo}
                    />
                </Grid>
                <Grid item container direction="column">
                    <Grid item>
                        <Typography variant="h6">
                            Philippine Normal University
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="overline" color="textSecondary">
                            Faculty of Arts and Languages
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PrintPreviewHead);
