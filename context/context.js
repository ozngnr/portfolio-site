import React, { useState, createContext, useEffect } from "react"
const Context = createContext()

function ContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)
  const [section, setSection] = useState("")
  const [sectionName, setSectionName] = useState("")
  const [sectionActive, setSectionActive] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  //Rename and animate section title
  useEffect(() => {
    setSectionActive(false)
    const timer = setTimeout(() => {
      setSectionName(section)
      setSectionActive(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [section])

  //
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <Context.Provider
      value={{
        navOpen,
        setNavOpen,
        section,
        setSection,
        sectionName,
        sectionActive,
        setSectionActive,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
