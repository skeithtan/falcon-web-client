import { inject, observer } from "mobx-react";
import * as React from "react";
import PrintPreviewDialog from "../../../../../../../../../../components/reusable/PrintPreviewDialog";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import PrintPreview from "./components/PrintPreview";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class PrintSchedule extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        const {
            facultyTabState: { printScheduleDialogState },
        } = facultyLoading!;
        const { isShowing } = printScheduleDialogState;
        return (
            <PrintPreviewDialog title="Print Faculty Schedule" open={isShowing}>
                <PrintPreview />
            </PrintPreviewDialog>
        );
    }
}
