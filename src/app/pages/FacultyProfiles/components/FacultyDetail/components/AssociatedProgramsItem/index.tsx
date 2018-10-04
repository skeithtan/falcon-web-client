import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import ProgramChip from "../../../../../../components/reusable/ProgramChip";
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
                    <Grid container>
                        <Grid item sm zeroMinWidth>
                            <Typography variant="body2">{field}</Typography>
                        </Grid>
                        <Grid item sm={9} zeroMinWidth>
                            {programs === undefined && (
                                <Typography color="textSecondary">
                                    No associated programs
                                </Typography>
                            )}

                            {programs !== undefined &&
                                programs.map(p => {
                                    const readable = ProgramReadable.get(
                                        p
                                    ) as Program;
                                    return (
                                        <ProgramChip
                                            key={readable}
                                            program={readable}
                                        />
                                    );
                                })}
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

export default withStyles(styles)(AssociatedProgramsItem);
