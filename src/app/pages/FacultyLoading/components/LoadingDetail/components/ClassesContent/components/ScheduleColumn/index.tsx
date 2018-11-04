import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as classNames from "classnames";
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
                    <Grid
                        item
                        key={cs.id}
                        onClick={this.setActiveClassSchedule(cs.id)}
                    >
                        <Card
                            className={classNames({
                                [classes.assigned]:
                                    cs.facultyMember !== undefined,
                            })}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="subtitle2">{`${
                                        cs.subjectCode
                                    } ${cs.section}`}</Typography>
                                    <Typography>{cs.room}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleColumn);
