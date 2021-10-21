import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from 'theme/GlobalStyle'
import styled from 'styled-components/macro'
import { ResumeContextProvider } from 'contexts/ResumeContext'

import Sidebar from 'components/builder/left/Sidebar'
import Preview from 'components/builder/right/Preview'
import Builder from 'components/builder/center/Builder'

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 192rem;
  height: 100vh;
  margin: 0 auto;
  /* display: flex; */
`

const Root = () => {
  const [sizeState, setSizeState] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSizeState(window.innerWidth)
    })
  })

  return (
    <>
      <Router>
        <GlobalStyle />
        <Wrapper>
          {sizeState >= 1250 ? (
            <>
              <Sidebar />
              <ResumeContextProvider>
                <Builder />
                <Preview />
              </ResumeContextProvider>
            </>
          ) : (
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                fontSize: '5rem',
                color: 'white',
              }}
            >
              {'Aplikacja działa tylko na urządzeniach desktopowych'}
            </div>
          )}
        </Wrapper>
      </Router>
    </>
  )
}

export default Root
