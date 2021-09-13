import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from 'theme/GlobalStyle'
import styled from 'styled-components'

import Sidebar from 'components/builder/left/Sidebar'
import Preview from 'components/builder/right/Preview'
import Builder from 'components/builder/center/Builder'

const Wrapper = styled.div`
display: flex;
`



const Root = () => (
  <>
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Sidebar></Sidebar>
        <Builder></Builder>
        <Preview></Preview>
      </Wrapper>

    </Router>
  </>
)


export default Root
