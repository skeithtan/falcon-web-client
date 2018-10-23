import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import styles from "./styles";

interface IPropsType {
    classSchedules: ClassSchedule[];
    classes: IStyleClasses;
}

class ScheduleColumn extends React.Component<IPropsType> {
    public showClassScheduleDetails = (
        cs: number,
        shouldShow: boolean
    ) => () => {
        FacultyLoadingController.setSelectedClassSchedule(cs);
        FacultyLoadingController.toggleClassScheduleDetails(shouldShow);
    };

    public render() {
        const { classSchedules, classes } = this.props;
        return (
            <Grid
                container
                direction="column"
                className={classes.padded}
                wrap="nowrap"
                spacing={16}
            >
                {classSchedules.map(cs => (
                    <Grid
                        item
                        key={cs.id}
                        onClick={this.showClassScheduleDetails(cs.id, true)}
                    >
                        <div className={classes.classSchedule}>
                            <Typography variant="subtitle2">{`${
                                cs.subjectCode
                            } ${cs.section}`}</Typography>
                            <Typography>{cs.room}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleColumn);
