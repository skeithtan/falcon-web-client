import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import * as moment from "moment";
import * as React from "react";
import ProgramChip from "../../../../../../../../components/reusable/ProgramChip";
import Recognition from "../../../../../../../../models/entities/recognition";
import Program, {
    ProgramReadable,
} from "../../../../../../../../models/enums/program";
import RecognitionBasis, {
    RecognitionBasisReadable,
} from "../../../../../../../../models/enums/recognition_basis";

interface IPropsType {
    recognition: Recognition;
}

export default class RecognitionItem extends React.Component<IPropsType> {
    public render() {
        const { recognition } = this.props;
        const recognitionDate = moment(recognition.date).format("LL");
        return (
            <TableRow>
                <TableCell>{recognition.title}</TableCell>
                <TableCell>
                    {
                        RecognitionBasisReadable.get(
                            recognition.basis
                        ) as RecognitionBasis
                    }
                </TableCell>
                <TableCell>{recognitionDate}</TableCell>
                <TableCell>{recognition.sponsor}</TableCell>
                <TableCell>
                    {recognition.associatedPrograms.map(ap => {
                        return (
                            <ProgramChip
                                key={ap}
                                program={ProgramReadable.get(ap) as Program}
                            />
                        );
                    })}
                </TableCell>
                <TableCell>
                    <React.Fragment>
                        <IconButton>
                            <Delete />
                        </IconButton>
                    </React.Fragment>
                </TableCell>
            </TableRow>
        );
    }
}
