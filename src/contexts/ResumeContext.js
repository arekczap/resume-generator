import React, { useState } from 'react'
import { initialState } from 'data/initialState'

export const ResumeContext = React.createContext()


export const ResumeContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <ResumeContext.Provider value={[state, setState]}>{children}</ResumeContext.Provider>
  )
}


