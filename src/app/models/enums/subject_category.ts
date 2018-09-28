enum SubjectCategory {
    Pedagogical = "Pedagogical",
    General = "General",
    Specialization = "Specialization",
    Elective = "Elective",
    Professional = "Professional",
}

export const SubjectCategoryReadable = new Map<SubjectCategory, string>([
    [SubjectCategory.Pedagogical, "Pedagogical"],
    [SubjectCategory.General, "General Education"],
    [SubjectCategory.Specialization, "Specialization"],
    [SubjectCategory.Elective, "Elective"],
    [SubjectCategory.Professional, "Professional"],
]);

export default SubjectCategory;
