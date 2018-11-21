import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FormClassSchedule from "../../../../../../../../../../models/entities/form_class_schedule";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import AddClassesItem from "../AddClassesItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    onAddClick: () => void;
}

@inject("facultyLoading")
@observer
export default class AddClassesTable extends React.Component<IPropsType> {
    public onRemoveClick = (cs: FormClassSchedule) => () => {
        const { facultyLoading } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        const csIndex = form.classes.indexOf(cs);
        form.classes.splice(csIndex, 1);
    };

    public render() {
        const { facultyLoading, onAddClick } = this.props;
        const {
            classesTabState: { addClassesDrawerState },
        } = facultyLoading!;
        const { form } = addClassesDrawerState;
        const { classes } = form;
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
                <Grid item>
                    {classes.length === 0 && (
                        <Typography>
                            <i>No classes listed</i>
                        </Typography>
                    )}
                    {classes.length > 0 && (
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
                                {classes.map(cs => (
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
