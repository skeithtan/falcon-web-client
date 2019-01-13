import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
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
        const { facultyLoading } = this.props;
        const { currentTermStatsState } = facultyLoading!;
        const { stats } = currentTermStatsState;
        return (
            <StateWrapper fetchableState={currentTermStatsState.fetchStatus}>
                {() => (
                    <Grid container direction="column" spacing={16}>
                        <Grid item>
                            <Typography variant="h6">
                                Faculty Members
                            </Typography>
                        </Grid>
                        <Grid item container direction="row" spacing={24}>
                            <Grid item>
                                <StatisticSection title="By Activity">
                                    <StatisticCard
                                        statisticNumber={stats.activity.active}
                                        statistic="Active"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.activity.inactive}
                                        statistic="Inactive"
                                    />
                                </StatisticSection>
                            </Grid>
                            <Grid item>
                                <StatisticSection title="By Load">
                                    <StatisticCard
                                        statisticNumber={stats.load.Adequate}
                                        statistic="Adequate Load"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.load.Extra}
                                        statistic="Extra Load"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.load.Max}
                                        statistic="Maximum Load"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.load.Underloaded}
                                        statistic="Underloaded"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.load.Unassigned}
                                        statistic="Unassigned"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.load.Overloaded}
                                        statistic="Overloaded"
                                    />
                                </StatisticSection>
                            </Grid>
                            <Grid item>
                                <StatisticSection title="By Faculty Rank">
                                    <StatisticCard
                                        statisticNumber={stats.rank.Instructor}
                                        statistic="Instructors"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.rank.AssistantProfessor}
                                        statistic="Assistant Professors"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.rank.AssociateProfessor}
                                        statistic="Associate Professors"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.rank.FullProfessor}
                                        statistic="Full Professors"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.rank.PartTime}
                                        statistic="Part Time"
                                    />
                                    <StatisticCard
                                        statisticNumber={stats.rank.Admin}
                                        statistic="Admins"
                                    />
                                </StatisticSection>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}
