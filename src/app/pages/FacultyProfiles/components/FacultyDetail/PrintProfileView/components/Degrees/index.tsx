import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import Degree from "../../../../../../../models/entities/degree";
import PrintEmptyState from "../PrintEmptyState";
import PrintSubdocument from "../PrintSubdocument";

interface IPropsType {
    degrees: Degree[];
}

export default class Degrees extends React.Component<IPropsType> {
    public render() {
        const { degrees } = this.props;
        return (
            <React.Fragment>
                {degrees.length === 0 && (
                    <PrintEmptyState subdocument="Degrees" />
                )}

                {degrees.length > 0 && (
                    <PrintSubdocument title="Degrees">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Level</TableCell>
                                    <TableCell>Completion Year</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {degrees.map(d => {
                                    return (
                                        <TableRow key={d.id}>
                                            <TableCell>{d.title}</TableCell>
                                            <TableCell>{d.level}</TableCell>
                                            <TableCell>
                                                {d.completionYear}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </PrintSubdocument>
                )}
            </React.Fragment>
        );
    }
}
