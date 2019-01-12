import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import StatisticCard from "./components/StatisticCard";
import StatisticSection from "./components/StatisticSection";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TermStatistics extends React.Component<IPropsType> {
    public render() {
        // const { facultyLoading } = this.props;
        // const { activeTerm } = facultyLoading!;
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="h6">Faculty Members</Typography>
                </Grid>
                <Grid item container direction="row" spacing={24}>
                    <Grid item>
                        <StatisticSection title="By Activity">
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Active"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Inactive"
                            />
                        </StatisticSection>
                    </Grid>
                    <Grid item>
                        <StatisticSection title="By Load">
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Adequate Load"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Extra Load"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Maximum Load"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Underloaded"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Unassigned"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Overloaded"
                            />
                        </StatisticSection>
                    </Grid>
                    <Grid item>
                        <StatisticSection title="By Faculty Rank">
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Instructors"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Assistant Professors"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Associate Professors"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Full Professors"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Part Time"
                            />
                            <StatisticCard
                                statisticNumber={0}
                                statistic="Admins"
                            />
                        </StatisticSection>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
