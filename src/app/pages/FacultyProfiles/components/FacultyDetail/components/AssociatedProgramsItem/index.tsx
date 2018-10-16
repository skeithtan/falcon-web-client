import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import DetailChip from "../../../../../../components/reusable/DetailChip";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import Program, {
    ProgramReadable,
} from "../../../../../../models/enums/program";
import styles from "./styles";

interface IPropsType {
    field: string;
    programs: Program[];
    classes: IStyleClasses;
}

class AssociatedProgramsItem extends React.Component<IPropsType> {
    public render() {
        const { field, programs, classes } = this.props;
        return (
            <ListItem divider>
                <Grid className={classes.listItem}>
                    <Grid container alignItems="center">
                        <Grid item sm zeroMinWidth>
                            <Typography variant="body2">{field}</Typography>
                        </Grid>
                        <Grid item sm={9} zeroMinWidth>
                            {programs ? (
                                programs
                                    .map(p => ProgramReadable.get(p)!)
                                    .map(p => <DetailChip key={p} detail={p} />)
                            ) : (
                                <Typography color="textSecondary">
                                    No associated programs
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

export default withStyles(styles)(AssociatedProgramsItem);
