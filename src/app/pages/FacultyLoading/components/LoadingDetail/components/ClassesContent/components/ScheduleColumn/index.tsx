import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import ClassScheduleCard from "../ClassScheduleCard";
import styles from "./styles";

interface IPropsType {
    classSchedules: ClassSchedule[];
    classes: IStyleClasses;
}

@observer
class ScheduleColumn extends React.Component<IPropsType> {
    public setActiveClassSchedule = (cs: number) => () => {
        FacultyLoadingController.setActiveClassSchedule(cs);
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
                    <Grid item key={cs.id}>
                        <ClassScheduleCard
                            classSchedule={cs}
                            onClick={this.setActiveClassSchedule(cs.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleColumn);
