import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { ResumeContext } from 'contexts/ResumeContext'
// import ToolbarText from 'components/Input/ToolbarText'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`

const Preview = () => {
  const [state] = useContext(ResumeContext)

  return (
    <>
      <Wrapper>
        <pre>{JSON.stringify(state, null, 4)}</pre>
        {/* <ToolbarText></ToolbarText> */}
      </Wrapper>
    </>
  )
}

export default Preview
