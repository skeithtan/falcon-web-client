import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import Notice from "../../../../../../../../models/entities/notice";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import NoticeItem from "./components/NoticeItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TermNotices extends React.Component<IPropsType> {
    public onRemoveClick = (n: Notice) => () => {
        FacultyLoadingController.removeNotice(n);
    };

    public render() {
        const { facultyLoading } = this.props;
        const { activeTerm } = facultyLoading!;
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="h6">Notices</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    spacing={16}
                >
                    <StateWrapper fetchableState={facultyLoading!.fetchStatus}>
                        {() => (
                            <React.Fragment>
                                {activeTerm!.notices.map(n => {
                                    console.log(activeTerm);
                                    return (
                                        <Grid item key={n.id}>
                                            <NoticeItem
                                                notice={n}
                                                onRemoveClick={this.onRemoveClick(
                                                    n
                                                )}
                                            />
                                        </Grid>
                                    );
                                })}
                            </React.Fragment>
                        )}
                    </StateWrapper>
                </Grid>
            </Grid>
        );
    }
}
