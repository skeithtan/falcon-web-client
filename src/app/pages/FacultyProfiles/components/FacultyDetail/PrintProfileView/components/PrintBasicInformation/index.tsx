import List from "@material-ui/core/List";
import * as moment from "moment";
import * as React from "react";
import DetailItem from "../../../../../../../components/reusable/DetailItem";
import FacultyProfile from "../../../../../../../models/entities/faculty_profile";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../../models/enums/faculty_member_type";

interface IPropsType {
    facultyMember: FacultyProfile;
}

export default class PrintBasicInformation extends React.Component<IPropsType> {
    public render() {
        const { facultyMember } = this.props;
        const type = FacultyMemberTypeReadable.get(
            facultyMember.type as FacultyMemberType
        );
        const dateOfBirth = `${moment(facultyMember.birthDate).format(
            "LL"
        )} (${facultyMember.birthDate.fromNow(true)})`;
        return (
            <List disablePadding>
                <DetailItem
                    field="ID Number"
                    value={facultyMember.formattedPnuId}
                />
                <DetailItem field="Employment Type" value={type!} />
                <DetailItem field="Email" value={facultyMember.email} />
                <DetailItem field="Sex" value={facultyMember.sex} />
                <DetailItem field="Date of Birth" value={dateOfBirth} />
            </List>
        );
    }
}
