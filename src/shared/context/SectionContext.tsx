import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Section } from "../../types/Section";
import { SectionController } from "../../controllers/sectionController";

interface ISectionContextData {
    sections: Section[];
    section?: Section;
    toggleSection: (section: Section) => void;
}

const SectionContext = createContext({} as ISectionContextData);

export const useSectionContext = () => useContext(SectionContext);

interface ISectionProviderProps {
    children: React.ReactNode
}
export const SectionProvider: React.FC<ISectionProviderProps> = ({ children }) => {

    const [sections, setSections] = useState<Section[]>([]);
    const [section, setSection] = useState<Section>();
    const [scrollControl, setScrollControl] = useState<boolean>(true);
    const sectionElementsRef = useRef<Record<string, HTMLElement>>({});

    const toggleSection = useCallback((section: Section) => {
        setScrollControl(false);
        setSection(section);
        setTimeout(() => {
            setScrollControl(true);
        }, 1000);
    }, []);

    useEffect(() => {
        const fetchSections = async () => {
            const data = await SectionController.getSections();
            setSections(data);
            if (data.length > 0) {
                setSection(data[0]);
            }
        };
        fetchSections();
    }, []);

    useEffect(() => {
        if (sections.length === 0 || !scrollControl) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const sec of sections) {
                const element = document.getElementById(sec.id);
                if (element) {
                    sectionElementsRef.current[sec.id] = element;
                }
            }

            const currentSection = sections.find((sec) => {
                const element = sectionElementsRef.current[sec.id];
                if (!element) return false;
                const { offsetTop, offsetHeight } = element;
                return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
            });
            if (currentSection && currentSection.id !== section?.id) {
                setSection(currentSection);
            }

            if (!currentSection) {
                setSection(undefined);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, section, scrollControl]);

    const value = useMemo(() => ({
        sections,
        section,
        toggleSection,
    }), [sections, section, toggleSection]);

    return (
        <SectionContext.Provider value={value}>
            {children}
        </SectionContext.Provider>
    )

}
