import { Section } from "../types/Section";

export const SectionService = {
    getSections(): Section[] {  
        return [
            { id: 'homeRef', name: 'Home', icon: 'ic:outline-home' },
            { id: 'aboutRef', name: 'Sobre Mim', icon: 'ic:outline-person' },
            { id: 'portfolioRef', name: 'Portfolio', icon: 'hugeicons:code-folder' },
            { id: 'servicesRef', name: 'Serviços', icon: 'ic:outline-work' },
            { id: 'experienceRef', name: 'Experiência', icon: 'ic:outline-history' },
        ];
    }
}