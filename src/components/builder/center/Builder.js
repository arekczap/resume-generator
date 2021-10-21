import React from 'react'
import styled from 'styled-components/macro'

import Routes from 'components/builder/center/sections/routes/Routes'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 47rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-100);
`

const BuilderWrapper = styled.div`
  height: 100%;
  padding: 2rem;
  overflow: auto;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-400);
    border-radius: 5px;
  }
`

// const SwitchFieldWrapper = styled.div`
//   height: 9rem;
//   box-shadow: 0 -.4rem 1.2rem rgba(0,0,0,.5);
// `

const Builder = () => {
  return (
    <>
      <Wrapper>
        <BuilderWrapper>
          <Routes />
        </BuilderWrapper>
      </Wrapper>
    </>
  )
}

export default Builder
