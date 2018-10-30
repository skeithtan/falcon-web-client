import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyProfile from "../../../../../../models/entities/faculty_profile";
import styles from "./styles";

// TODO: Empty state for taught subjects

interface IPropsType {
    classes: IStyleClasses;
    facultyProfile: FacultyProfile;
}

class TaughtSubjectsView extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <Toolbar>
                    <Typography variant="h5">Taught Subjects</Typography>
                </Toolbar>
                <div>{/* TODO: Map of chips containing taught subjects */}</div>
            </Card>
        );
    }
}

export default withStyles(styles)(TaughtSubjectsView);
