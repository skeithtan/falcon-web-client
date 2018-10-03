import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Recognition from "../../../../../../models/entities/recognition";
import RecognitionItem from "./components/RecognitionItem";

interface IPropsType {
    recognitions: Recognition[];
}

@inject("facultyProfiles")
@observer
export default class RecognitionsView extends React.Component<IPropsType> {
    public render() {
        const { recognitions } = this.props;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Completion Year</TableCell>
                        <TableCell>Associated Programs</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {recognitions !== undefined && (
                    <TableBody>
                        {recognitions!.map(r => {
                            return (
                                <RecognitionItem key={r.id} recognition={r} />
                            );
                        })}
                    </TableBody>
                )}
            </Table>
        );
    }
}
