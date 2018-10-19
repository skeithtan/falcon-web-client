import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../../../controllers/faculty_loading";
import FacultyLoadingFacultyMember from "../../../../../../../../../../models/entities/faculty_loading_faculty_member";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../../../../../models/enums/faculty_member_type";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyMember: FacultyLoadingFacultyMember;
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class FacultyListItem extends React.Component<IPropsType> {
    public onClick = () => {
        const { facultyMember } = this.props;
        FacultyLoadingController.setActiveFaculty(facultyMember.facultyId);
    };

    public render() {
        const { facultyMember, facultyLoading } = this.props;
        const { facultyTabState } = facultyLoading!;
        const { activefacultyId } = facultyTabState;
        return (
            <ListItem
                button
                selected={activefacultyId === facultyMember.facultyId}
                onClick={this.onClick}
            >
                <ListItemText
                    primary={facultyMember.fullName}
                    secondary={
                        FacultyMemberTypeReadable.get(
                            facultyMember.type
                        ) as FacultyMemberType
                    }
                />
            </ListItem>
        );
    }
}
