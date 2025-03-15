import React, { createContext, useContext } from 'react';
import SectionManager from './SectionManager';

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export const SectionManagerProvider = ({ children }) => {
  const sectionManager = SectionManager();

  return (
    <SectionContext.Provider value={sectionManager}>
      {children}
    </SectionContext.Provider>
  );
};