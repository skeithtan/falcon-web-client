import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingFacultyMember from "../../../../../../../../../../models/entities/faculty_loading_faculty_member";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    facultyMember: FacultyLoadingFacultyMember;
}

@inject("facultyLoading")
@observer
export default class FacultyCandidateItem extends React.Component<IPropsType> {
    public onFacultyClick = (
        facultyMember: FacultyLoadingFacultyMember
    ) => () => {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const { classScheduleDetailsState } = classesTabState;
        const { form } = classScheduleDetailsState;
        form.facultyMember = facultyMember;
    };

    public render() {
        const { facultyLoading, facultyMember } = this.props;
        const { classesTabState } = facultyLoading!;
        const { classScheduleDetailsState } = classesTabState;
        const { form } = classScheduleDetailsState;
        return (
            <ListItem
                divider
                selected={
                    form.facultyMember!.facultyId === facultyMember.facultyId
                }
                onClick={this.onFacultyClick(facultyMember)}
            >
                <ListItemText
                    primary={facultyMember.fullName}
                    secondary={facultyMember.type}
                />
                <ListItemSecondaryAction>
                    <Radio
                        checked={
                            form.facultyMember!.facultyId ===
                            facultyMember.facultyId
                        }
                        onClick={this.onFacultyClick(facultyMember)}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
