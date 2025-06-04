import { SectionService } from "../services/sectionService";
import { Section } from "../types/Section";

export const SectionController = {
    getSections: async (): Promise<Section[]> => {  
        return SectionService.getSections();
    }
};
