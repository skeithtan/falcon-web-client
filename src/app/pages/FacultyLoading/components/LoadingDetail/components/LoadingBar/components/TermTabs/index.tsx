import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import FacultyLoadingTab from "../../../../../../../../models/enums/faculty_loading_tab";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TermTabs extends React.Component<IPropsType> {
    public setTab = (event: React.ChangeEvent, tab: FacultyLoadingTab) =>
        FacultyLoadingController.setActiveTab(tab);

    public render() {
        const { facultyLoading } = this.props;
        const { activeTab } = facultyLoading!;
        return (
            <Tabs
                value={activeTab}
                onChange={this.setTab}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Overview" value={FacultyLoadingTab.Overview} />
                <Tab label="Faculty" value={FacultyLoadingTab.Faculty} />
                <Tab label="Classes" value={FacultyLoadingTab.Classes} />
            </Tabs>
        );
    }
}
