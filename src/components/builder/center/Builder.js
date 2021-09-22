import React from 'react'
import styled from 'styled-components'

import Routes from 'components/builder/center/sections/routes/Routes'

const SectionWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
background-color: var(--color-primary-100);
`

const SectionBuilderWrapper = styled.div`
height: 100%;
padding: 2rem;
overflow: auto;
margin: 0.5rem;

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-primary-400);
  border-radius: 5px;
}
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