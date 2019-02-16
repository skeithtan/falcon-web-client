import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import UnassignedClassItem from "./components/UnassignedClassItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class UnassignedClassesDialog extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyLoadingController.toggleUnassignedClassesDialog(false);
    };

    public render() {
        const { facultyLoading } = this.props;
        const {
            classesTabState: {
                classSchedules,
                unassignedClassesDialogState: { isShowing },
            },
        } = facultyLoading!;
        const unassignedClasses = Array.from(classSchedules!.values()).filter(
            cs => cs.facultyMember === undefined
        );

        return (
            <Dialog
                open={isShowing}
                onClose={this.onClose}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>Unassigned Classes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The following classes were not assigned during the
                        automatic assignment. No faculty member was found fit
                        for these classes.
                    </DialogContentText>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Days</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Room</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell>Section</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {unassignedClasses.map(cs => (
                                <UnassignedClassItem classSchedule={cs} />
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.onClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
