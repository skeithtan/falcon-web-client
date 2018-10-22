import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import styles from "./styles";

interface IPropsType {
    classSchedules: ClassSchedule[];
    classes: IStyleClasses;
}

class ScheduleColumn extends React.Component<IPropsType> {
    public render() {
        const { classSchedules, classes } = this.props;
        return (
            <Grid container direction="column">
                {classSchedules.map(cs => (
                    <div key={cs.id} className={classes.classSchedule}>
                        <Typography variant="subtitle2">{`${cs.subjectCode} ${
                            cs.section
                        }`}</Typography>
                        <Typography>{cs.room}</Typography>
                    </div>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleColumn);
