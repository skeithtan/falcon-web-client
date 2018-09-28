enum Program {
    English = "English",
    Filipino = "Filipino",
    CultureAndArts = "BCAED",
    Literature = "Literature",
}

export const ProgramReadable = new Map<Program, string>([
    [Program.English, "English"],
    [Program.Filipino, "Filipino"],
    [Program.CultureAndArts, "Culture and Arts"],
    [Program.Literature, "Literature"],
]);

export default Program;
