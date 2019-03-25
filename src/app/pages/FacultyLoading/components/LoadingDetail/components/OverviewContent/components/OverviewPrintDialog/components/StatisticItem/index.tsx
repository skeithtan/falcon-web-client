import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";

interface IPropsType {
    title: string;
    value: any;
    forRank?: boolean;
}

export default class StatisticItem extends React.Component<IPropsType> {
    public render() {
        const { title, value, forRank } = this.props;
        return (
            <TableRow>
                <TableCell>{title}</TableCell>
                <TableCell align={forRank ? "left" : "center"}>
                    {value}
                </TableCell>
            </TableRow>
        );
    }
}
