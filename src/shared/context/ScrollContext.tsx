import { createContext, useContext, RefObject, useRef } from "react";

export interface IScrollContextData {
  refs: {
    homeRef: RefObject<HTMLDivElement | null>;
    aboutRef: RefObject<HTMLDivElement | null>;
    portfolioRef: RefObject<HTMLDivElement | null>;
    servicesRef: RefObject<HTMLDivElement | null>;
    experienceRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
  };
  scrollToSection: (section: keyof IScrollContextData['refs']) => void;
}

export const ScrollContext = createContext({} as IScrollContextData);

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const getOffset = () => {
    if (window.innerWidth < 600) {
      return 10;
    } else if (window.innerWidth < 960) { 
      return 20;
    } else { 
      return 110;
    }
  };

  const scrollToSection = (section: keyof IScrollContextData['refs']) => {
    const offset = getOffset();
    const sectionRef: { [key in keyof IScrollContextData['refs']]: RefObject<HTMLDivElement | null> } = {
      homeRef: homeRef,
      aboutRef: aboutRef,
      portfolioRef: portfolioRef,
      servicesRef: servicesRef,
      experienceRef: experienceRef,
      contactRef: contactRef,
    };

    const ref = sectionRef[section];

    if (ref?.current) {
      const top = ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ refs: { homeRef, aboutRef, portfolioRef, servicesRef, experienceRef, contactRef }, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
