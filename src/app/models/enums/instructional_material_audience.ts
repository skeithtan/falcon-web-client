enum InstructionalMaterialAudience {
    Student = "Student",
    Teacher = "Teacher",
}

export const InstructionalMaterialAudienceReadable = new Map<InstructionalMaterialAudience, string>([
    [InstructionalMaterialAudience.Student, "Student"],
    [InstructionalMaterialAudience.Teacher, "Teacher"],
]);

export default InstructionalMaterialAudience;
