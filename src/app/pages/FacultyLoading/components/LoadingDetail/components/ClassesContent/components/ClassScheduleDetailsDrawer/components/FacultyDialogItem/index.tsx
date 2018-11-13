import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";
import { FacultyMemberTypeReadable } from "../../../../../../../../../../models/enums/faculty_member_type";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    facultyMember?: FacultyProfile;
    onClick: () => void;
}

@inject("facultyLoading")
@observer
export default class FacultyDialogItem extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, facultyMember, onClick } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const { form } = assignFacultyDialogState;
        const selected =
            Boolean(form.facultyMember) &&
            form.facultyMember!.id === facultyMember!.id;

        if (selected) {
            console.log(form.facultyMember!.id, facultyMember!.id);
        }

        return (
            <ListItem divider onClick={onClick} selected={selected}>
                <ListItemText
                    primary={facultyMember!.fullName}
                    secondary={FacultyMemberTypeReadable.get(
                        facultyMember!.type
                    )}
                />
                <ListItemSecondaryAction>
                    <Radio onClick={onClick} checked={selected} />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
