import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import * as moment from "moment";
import * as React from "react";
import ProgramChip from "../../../../../../../../components/reusable/ProgramChip";
import Presentation from "../../../../../../../../models/entities/presentation";
import PresentationCategory, {
    PresentationCategoryReadable,
} from "../../../../../../../../models/enums/presentation_category";
import PresentationMedium, {
    PresentationMediumReadable,
} from "../../../../../../../../models/enums/presentation_medium";
import Program, {
    ProgramReadable,
} from "../../../../../../../../models/enums/program";

interface IPropsType {
    presentation: Presentation;
}

export default class PresentationItem extends React.Component<IPropsType> {
    public render() {
        const { presentation } = this.props;
        const category = PresentationCategoryReadable.get(
            presentation.category
        ) as PresentationCategory;
        const medium = PresentationMediumReadable.get(
            presentation.medium
        ) as PresentationMedium;
        const date = moment(presentation.date).format("LL");
        const daysDuration = `${presentation.daysDuration} days`;
        return (
            <TableRow>
                <TableCell>{presentation.title}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{presentation.sponsor}</TableCell>
                <TableCell>{presentation.venue}</TableCell>
                <TableCell>{presentation.conference}</TableCell>
                <TableCell>{medium}</TableCell>
                <TableCell>{daysDuration}</TableCell>
                <TableCell>
                    {presentation.associatedPrograms.map(ap => {
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
