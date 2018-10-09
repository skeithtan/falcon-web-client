import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "../../../../../../controllers/faculty_profiles";
import FacultyMember from "../../../../../../models/entities/faculty_member";
import { FacultyProfilesState } from "../../../../../../store/faculty_profiles";

interface IPropsType {
    facultyMember: FacultyMember;
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class FacultyItem extends React.Component<IPropsType> {
    public onClick = () => {
        const { facultyMember } = this.props;
        FacultyProfilesController.setActiveFacultyMember(facultyMember.id);
    };

    public render() {
        const { facultyMember, facultyProfiles } = this.props;
        const { activeFacultyId } = facultyProfiles!;

        return (
            <ListItem
                button
                selected={activeFacultyId === facultyMember.id}
                onClick={this.onClick}
            >
                <ListItemText
                    primary={facultyMember.user!.fullName}
                    secondary={facultyMember.formattedPnuId}
                />
            </ListItem>
        );
    }
}
