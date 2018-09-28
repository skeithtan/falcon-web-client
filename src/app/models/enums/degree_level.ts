enum DegreeLevel {
    Associate = "Associate",
    Bachelor = "Bachelor",
    Master = "Master",
    Doctorate = "Doctorate",
}

export const DegreeLevelReadable = new Map<DegreeLevel, string>([
    [DegreeLevel.Associate, "Associate"],
    [DegreeLevel.Bachelor, "Bachelor"],
    [DegreeLevel.Master, "Master"],
    [DegreeLevel.Doctorate, "Doctorate"],
]);

export default DegreeLevel;
