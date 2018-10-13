import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyProfilesState } from "src/app/store/faculty_profiles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
export default class PrintPreview extends React.Component<IPropsType> {
    public render() {
        const { facultyProfiles } = this.props;
        const { activeFacultyMember } = facultyProfiles!;
        return (
            <React.Fragment>
                <div>{activeFacultyMember!.pnuId}</div>
            </React.Fragment>
        );
    }
}
