import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class FacultyDetail extends React.Component<IPropsType> {
    public render() {
        const { facultyProfiles } = this.props;
        const { activeFacultyMember } = facultyProfiles!;

        return (
            <div>
                {activeFacultyMember !== undefined && (
                    <div>{activeFacultyMember.pnuId}</div>
                )}
            </div>
        );
    }
}
