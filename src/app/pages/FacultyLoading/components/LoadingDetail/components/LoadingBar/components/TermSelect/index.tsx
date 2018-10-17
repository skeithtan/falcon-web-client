import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TermSelect extends React.Component<IPropsType> {
    public onChange = (event: any) => {
        FacultyLoadingController.setActiveTerm(event.target.value);
    };

    public render() {
        const { facultyLoading } = this.props;
        const { terms, activeTerm } = facultyLoading!;
        return (
            <TextField
                select
                label="Term"
                variant="outlined"
                value={activeTerm!.readableString}
                onChange={this.onChange}
            >
                {terms!.size > 0 &&
                    Array.from(terms!).map(([termId, term]) => (
                        <MenuItem key={termId} value={termId}>
                            {term.readableString}
                        </MenuItem>
                    ))}
            </TextField>
        );
    }
}
