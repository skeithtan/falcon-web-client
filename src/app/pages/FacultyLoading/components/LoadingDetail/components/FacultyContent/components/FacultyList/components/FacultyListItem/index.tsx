import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import FacultyLoadingFacultyMember from "../../../../../../../../../../models/entities/faculty_loading_faculty_member";

interface IPropsType {
    facultyMember: FacultyLoadingFacultyMember;
}

export default class FacultyListItem extends React.Component<IPropsType> {
    public render() {
        const { facultyMember } = this.props;
        return (
            <ListItem>
                <ListItemText
                    primary={facultyMember.fullName}
                    secondary={facultyMember.type}
                />
            </ListItem>
        );
    }
}
