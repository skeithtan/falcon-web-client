import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import LoadStatisticPanel from "./components/LoadStatisticPanel";
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
                                        statisticNumber={
                                            stats.activity.inactive
                                        }
                                        statistic="Inactive"
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
                                        statisticNumber={
                                            stats.rank.AssistantProfessor
                                        }
                                        statistic="Assistant Professors"
                                    />
                                    <StatisticCard
                                        statisticNumber={
                                            stats.rank.AssociateProfessor
                                        }
                                        statistic="Associate Professors"
                                    />
                                    <StatisticCard
                                        statisticNumber={
                                            stats.rank.FullProfessor
                                        }
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
                        <Grid item container direction="column" spacing={16}>
                            <Typography variant="overline">By Load</Typography>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Unassigned"
                                    facultyMembers={stats.load.Unassigned}
                                />
                            </Grid>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Underloaded"
                                    facultyMembers={stats.load.Underloaded}
                                />
                            </Grid>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Adequate"
                                    facultyMembers={stats.load.Adequate}
                                />
                            </Grid>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Extra"
                                    facultyMembers={stats.load.Extra}
                                />
                            </Grid>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Maximum"
                                    facultyMembers={stats.load.Max}
                                />
                            </Grid>
                            <Grid item>
                                <LoadStatisticPanel
                                    title="Overloaded"
                                    facultyMembers={stats.load.Overloaded}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}
