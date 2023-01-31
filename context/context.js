import React, { useState, createContext, useEffect } from 'react';
const Context = createContext();

function ContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [section, setSection] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [sectionInView, setSectionInView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  //Rename and animate section title
  useEffect(() => {
    setSectionInView(false);
    const timer = setTimeout(() => {
      setSectionName(section);
      setSectionInView(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [section]);

  //
  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        navOpen,
        setNavOpen,
        section,
        setSection,
        sectionName,
        sectionInView,
        setSectionInView,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
