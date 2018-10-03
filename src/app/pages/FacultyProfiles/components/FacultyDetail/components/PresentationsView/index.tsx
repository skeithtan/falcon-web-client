import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Presentation from "../../../../../../models/entities/presentation";
import PresentationItem from "./components/PresentationItem";

interface IPropsType {
    presentations: Presentation[];
}

@inject("facultyProfiles")
@observer
export default class PresentationsView extends React.Component<IPropsType> {
    public render() {
        const { presentations } = this.props;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Sponsor</TableCell>
                        <TableCell>Venue</TableCell>
                        <TableCell>Conference</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Days Duration</TableCell>
                        <TableCell>Associated Programs</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {presentations !== undefined && (
                    <TableBody>
                        {presentations!.map(p => {
                            return (
                                <PresentationItem key={p.id} presentation={p} />
                            );
                        })}
                    </TableBody>
                )}
            </Table>
        );
    }
}
