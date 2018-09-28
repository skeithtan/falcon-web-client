enum InstructionalMaterialMedium {
    Print = "Print",
    Module = "Module",
    Video = "Video",
    Slide = "Slide",
    DigitalFile = "DigitalFile",
    Audio = "Audio",
}

export const InstructionalMaterialMediumReadable = new Map<InstructionalMaterialMedium, string>([
    [InstructionalMaterialMedium.Print, "Print"],
    [InstructionalMaterialMedium.Module, "Module"],
    [InstructionalMaterialMedium.Video, "Video"],
    [InstructionalMaterialMedium.Slide, "Slide"],
    [InstructionalMaterialMedium.DigitalFile, "Digital File"],
    [InstructionalMaterialMedium.Audio, "Audio"],
]);

export default InstructionalMaterialMedium;
