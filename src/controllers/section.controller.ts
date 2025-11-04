import { SectionService } from "../services/section.service";
import { Section } from "../types/Section";

export const SectionController = {
    getSections: async (): Promise<Section[]> => {
        try {
            const response = SectionService.getSections();
            return response;
        } catch (error) {
            throw error;
        }
    }
};
