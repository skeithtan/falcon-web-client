import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as classNames from "classnames";
import { observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import FeedbackStatus from "../../../../../../../../models/enums/feedback_status";
import styles from "./styles";

interface IPropsType {
    classSchedule: ClassSchedule;
    onClick?: () => any;
    classes: IStyleClasses;
}

@observer
class ClassScheduleCard extends React.Component<IPropsType> {
    public render() {
        const { classSchedule: cs, onClick, classes } = this.props;
        const hasFacultyMember = Boolean(cs.facultyMember);
        const isRejected = Boolean(
            cs.facultyMember &&
                cs.facultyMember!.feedback === FeedbackStatus.Rejected
        );
        const isAssignedAdjunct = Boolean(cs.adjunctName);

        let name = "";

        if (hasFacultyMember) {
            name = cs.facultyMember!.fullName;
        }
        if (isAssignedAdjunct) {
            name = cs.adjunctName!;
        }

        return (
            <Card
                onClick={onClick}
                className={classNames({
                    [classes.assigned]: hasFacultyMember,
                    [classes.rejected]: isRejected,
                    [classes.adjunct]: isAssignedAdjunct,
                })}
                square
            >
                <CardActionArea>
                    <CardContent>
                        <Grid
                            container
                            spacing={16}
                            direction="column"
                            alignItems="stretch"
                        >
                            <Grid item>
                                <Typography variant="subtitle2" color="inherit">
                                    {cs.shortTitle}
                                </Typography>
                                <Typography color="inherit">
                                    {cs.room}
                                </Typography>
                            </Grid>

                            {hasFacultyMember && (
                                <Grid item container direction="column">
                                    <Grid item>
                                        <Typography
                                            variant="overline"
                                            color="inherit"
                                        >
                                            Assigned to
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle2"
                                            color="inherit"
                                        >
                                            {name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )}
                            {isAssignedAdjunct && (
                                <Grid item container direction="column">
                                    <Grid item>
                                        <Typography
                                            variant="overline"
                                            color="inherit"
                                        >
                                            Assigned adjunct member
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle2"
                                            color="inherit"
                                        >
                                            {name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(ClassScheduleCard);
