import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyProfile from "../../../../../../models/entities/faculty_profile";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    facultyProfile: FacultyProfile;
}

class TaughtSubjectsView extends React.Component<IPropsType> {
    public render() {
        const { classes, facultyProfile } = this.props;
        return (
            <Card className={classes.card}>
                <Toolbar>
                    <Typography variant="h6">Taught Subjects</Typography>
                </Toolbar>
                <CardContent>
                    {Object.keys(facultyProfile.taughtSubjects!).length ===
                        0 && (
                        <Typography variant="body1">
                            This faculty member has not been assigned to any
                            subjects yet.
                        </Typography>
                    )}

                    {Object.keys(facultyProfile.taughtSubjects!).length !== 0 &&
                        Object.entries(facultyProfile.taughtSubjects!).map(
                            ([subjectCode, count]) => (
                                <Chip
                                    avatar={<Avatar>{count}</Avatar>}
                                    label={subjectCode}
                                    variant="outlined"
                                />
                            )
                        )}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(TaughtSubjectsView);
