import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Degree from "../../../../../../models/entities/degree";
import DegreeItem from "./components/DegreeItem";

interface IPropsType {
    degrees: Degree[];
}

@inject("facultyProfiles")
@observer
export default class DegreesView extends React.Component<IPropsType> {
    public render() {
        const { degrees } = this.props;
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
                {degrees !== undefined && (
                    <TableBody>
                        {degrees!.map(d => {
                            return <DegreeItem key={d.id} degree={d} />;
                        })}
                    </TableBody>
                )}
            </Table>
        );
    }
}
