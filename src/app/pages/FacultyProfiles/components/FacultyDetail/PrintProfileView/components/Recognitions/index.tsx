import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as moment from "moment";
import * as React from "react";
import Recognition from "../../../../../../../models/entities/recognition";
import PrintEmptyState from "../PrintEmptyState";
import PrintSubdocument from "../PrintSubdocument";

interface IPropsType {
    recognitions: Recognition[];
}

export default class Recognitions extends React.Component<IPropsType> {
    public render() {
        const { recognitions } = this.props;
        return (
            <React.Fragment>
                {recognitions.length === 0 && (
                    <PrintEmptyState subdocument="Academic Recognitions" />
                )}

                {recognitions.length > 0 && (
                    <PrintSubdocument title="Academic Recognitions">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Basis</TableCell>
                                    <TableCell>Sponsor</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recognitions.map(r => {
                                    const date = moment(r.date).format(
                                        "MMMM Do YYYY"
                                    );
                                    return (
                                        <TableRow key={r.id}>
                                            <TableCell>{r.title}</TableCell>
                                            <TableCell>{r.basis}</TableCell>
                                            <TableCell>{r.sponsor}</TableCell>
                                            <TableCell>{date}</TableCell>
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
