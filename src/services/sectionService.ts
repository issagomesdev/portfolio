import { Section } from "../types/section";

export const SectionService = {
    getSections(): Section[] {  
        return [
            { id: 1, name: 'Home', icon: 'ic:outline-home' },
            { id: 2, name: 'Sobre Mim', icon: 'ic:outline-person' },
            { id: 3, name: 'Portfolio', icon: 'hugeicons:code-folder' },
            { id: 4, name: 'Serviços', icon: 'ic:outline-work' },
            { id: 5, name: 'Experiência', icon: 'ic:outline-history' },
        ];
    }
}