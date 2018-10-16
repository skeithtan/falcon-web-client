import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import PrintPreview from "./components/PrintPreview";
import PrintSettings from "./components/PrintSettings";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class PrintProfileView extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                item
                direction="row"
                alignItems="stretch"
                className={classes.root}
                wrap="nowrap"
            >
                <Grid item xs={9} className={classes.preview}>
                    <PrintPreview />
                </Grid>
                <Grid item xs={3} className={classes.settings}>
                    <PrintSettings />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PrintProfileView);
