import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    field: string;
    value: string;
    classes: IStyleClasses;
}

class DetailItem extends React.Component<IPropsType> {
    public render() {
        const { field, value, classes } = this.props;
        return (
            <ListItem divider>
                <Grid className={classes.listItem}>
                    <Grid container wrap="nowrap">
                        <Grid item sm zeroMinWidth>
                            <Typography variant="body2">{field}</Typography>
                        </Grid>
                        <Grid item sm={9} zeroMinWidth>
                            <Typography>{value}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

export default withStyles(styles)(DetailItem);
