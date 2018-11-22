import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import FormClassSchedule from "../../../../../../../../../../models/entities/form_class_schedule";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import AddClassesItem from "../AddClassesItem";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    onAddClick: () => void;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class AddClassesTable extends React.Component<IPropsType> {
    public onRemoveClick = (cs: FormClassSchedule) => () => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        const csIndex = form.classSchedules.indexOf(cs);
        form.classSchedules.splice(csIndex, 1);
    };

    public render() {
        const { facultyLoading, onAddClick, classes } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        const { classSchedules } = form;
        return (
            <Grid container direction="row" spacing={8}>
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h6">Pending Classes</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={onAddClick}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item className={classes.table}>
                    {classSchedules.length === 0 && (
                        <Typography>
                            <i>No classes listed</i>
                        </Typography>
                    )}
                    {classSchedules.length > 0 && (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Days</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Room</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Section</TableCell>
                                    <TableCell>{}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {classSchedules.map(cs => (
                                    <AddClassesItem
                                        key={cs.id}
                                        classSchedule={cs}
                                        onRemoveClick={this.onRemoveClick(cs)}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AddClassesTable);
