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
        return (
            <Card
                onClick={onClick}
                className={classNames({
                    [classes.assigned]: hasFacultyMember,
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
                                <Grid item>
                                    <Typography
                                        variant="overline"
                                        color="inherit"
                                    >
                                        Assigned to
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="inherit"
                                    >
                                        {cs.facultyMember!.fullName}
                                    </Typography>
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
