import { SectionService } from "../services/section.service";
import { Section } from "../types/Section";

export const SectionController = {
    getSections: async (): Promise<Section[]> => {  
        return SectionService.getSections();
    }
};
