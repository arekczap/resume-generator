import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'

import Routes from 'components/builder/center/sections/routes/Routes'

const SectionWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;

`

const SectionBuilderWrapper = styled.div`
height: 100%;
padding: 3rem;

`

const SwitchFieldSectionWrapper = styled.div`
  height: 9rem;
  box-shadow: 0 -.4rem 1.2rem rgba(0,0,0,.5);
`


const Builder = () => {




  return (
    <>
      <SectionWrapper >
        <SectionBuilderWrapper>
          <Routes />

        </SectionBuilderWrapper>
        <SwitchFieldSectionWrapper />
      </SectionWrapper>
    </>
  )
}

export default Builder