import Sidebar from 'components/builder/left/Sidebar'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from 'theme/GlobalStyle'

const Root = () => (
  <>
    <Router>
      <GlobalStyle />
      <Sidebar></Sidebar>
    </Router>
  </>
)


export default Root
