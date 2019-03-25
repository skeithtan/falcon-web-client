import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";
import { FacultyMemberTypeReadable } from "../../../../../../../../../../models/enums/faculty_member_type";
import StatisticItem from "../StatisticItem";
import styles from "./styles";

interface IPropsType {
    title: string;
    facultyMembers: FacultyProfile[];
    classes: IStyleClasses;
}

class FacultyRankTable extends React.Component<IPropsType> {
    public render() {
        const { title, facultyMembers, classes } = this.props;
        const empty = facultyMembers.length === 0;
        return (
            <Grid container direction="column" spacing={8}>
                <Grid item>
                    <Typography variant="overline">{title}</Typography>
                </Grid>
                <Grid item>
                    {!empty && (
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {facultyMembers.map(fm => (
                                    <StatisticItem
                                        key={fm.id}
                                        title={`${fm.firstName} ${fm.lastName}`}
                                        value={FacultyMemberTypeReadable.get(
                                            fm.type
                                        )}
                                        forRank
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    )}
                    {empty && (
                        <Typography variant="body2">
                            <i>No faculty members</i>
                        </Typography>
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(FacultyRankTable);
