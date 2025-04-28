import { SectionService } from "../services/sectionService";
import { Section } from "../types/section";

export const SectionController = {
    getSections: async (): Promise<Section[]> => {  
        return SectionService.getSections();
    }
};
