import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    title: string;
    children: React.ReactNode;
    classes: IStyleClasses;
}

class StatisticTable extends React.Component<IPropsType> {
    public render() {
        const { title, children, classes } = this.props;
        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>{title}</TableCell>
                        <TableCell>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(StatisticTable);
