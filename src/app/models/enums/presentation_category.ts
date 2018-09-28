enum PresentationCategory {
    Institutional = "Institutional",
    Regional = "Regional",
    National = "National",
    International = "International",
}

export const PresentationCategoryReadable = new Map<PresentationCategory, string>([
    [PresentationCategory.Institutional, "Institutional"],
    [PresentationCategory.Regional, "Regional"],
    [PresentationCategory.National, "National"],
    [PresentationCategory.International, "International"],
]);

export default PresentationCategory;
