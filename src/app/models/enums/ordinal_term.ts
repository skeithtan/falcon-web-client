enum OrdinalTerm {
    First = "First",
    Second = "Second",
    Third = "Third",
}

export const OrdinalTermReadable = new Map<OrdinalTerm, string>([
    [OrdinalTerm.First, "First"],
    [OrdinalTerm.Second, "Second"],
    [OrdinalTerm.Third, "Third"],
]);

export default OrdinalTerm;
