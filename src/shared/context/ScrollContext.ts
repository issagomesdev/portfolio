import { createContext, useContext } from "react";
import { RefObject } from "react";

interface IScrollContextData {
  homeRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  portfolioRef: RefObject<HTMLDivElement | null>;
  servicesRef: RefObject<HTMLDivElement | null>;
  experienceRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export const ScrollContext = createContext({} as IScrollContextData);

export const useScrollContext = () => useContext(ScrollContext);
