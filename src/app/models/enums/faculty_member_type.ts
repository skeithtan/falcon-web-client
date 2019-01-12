enum FacultyMemberType {
    Instructor = "Instructor",
    AssistantProfessor = "AssistantProfessor",
    AssociateProfessor = "AssociateProfessor",
    FullProfessor = "FullProfessor",
    PartTime = "PartTime",
    Adjunct = "Admin",
}

export const FacultyMemberTypeReadable = new Map<FacultyMemberType, string>([
    [FacultyMemberType.Instructor, "Instructor"],
    [FacultyMemberType.AssistantProfessor, "Assistant Professor"],
    [FacultyMemberType.AssociateProfessor, "Associate Professor"],
    [FacultyMemberType.FullProfessor, "Full Professor"],
    [FacultyMemberType.PartTime, "Part-time"],
    [FacultyMemberType.Adjunct, "Admin"],
]);

export default FacultyMemberType;
