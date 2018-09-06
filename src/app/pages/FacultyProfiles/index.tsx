import * as React from "react";
import { RouteComponentProps } from "react-router";

interface IRouteParameters {
    facultyId?: string;
}

class FacultyProfiles extends React.Component<
    RouteComponentProps<IRouteParameters>
> {
    public componentDidMount() {
        document.title = "Faculty Profiles - Falcon";
    }

    public render() {
        const {
            match: { params },
        } = this.props;

        console.log(params);
        return (
            <div>
                <h1>Hello, World</h1>
            </div>
        );
    }
}

export default FacultyProfiles;
