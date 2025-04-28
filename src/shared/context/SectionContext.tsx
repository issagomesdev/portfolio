import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Section } from "../../types/section";
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

    const toggleSection = useCallback((section: Section) => {
        setSection(section);
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
