enum RecognitionBasis {
    Research = "Research",
    Scholarship = "Scholarship",
    ExtensionWork = "ExtensionWork",
    Civic = "Civic",
    Instruction = "Instruction",
}

export const RecognitionBasisReadable = new Map<RecognitionBasis, string>([
    [RecognitionBasis.Research, "Research"],
    [RecognitionBasis.Scholarship, "Scholarship"],
    [RecognitionBasis.ExtensionWork, "Extension Work"],
    [RecognitionBasis.Civic, "Civic"],
    [RecognitionBasis.Instruction, "Instruction"],
]);

export default RecognitionBasis;
