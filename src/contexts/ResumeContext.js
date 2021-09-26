import React, { useState } from 'react'
import { initialState } from 'data/initialState'

const ResumeContext = React.createContext()

const ResumeContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState)


  return (
    <ResumeContext.Provider value={[state, setState]}>{children}</ResumeContext.Provider>
  )
}




export {
  ResumeContext,
  ResumeContextProvider,

}


