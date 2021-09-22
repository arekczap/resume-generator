import React, { useContext } from 'react'
import styled from 'styled-components'
import { ResumeContext } from 'contexts/ResumeContext'


const SectionWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: white;
`


const Preview = () => {
  // const [value, setValue] = useContext(ResumeContext)

  return (
    <>
      <SectionWrapper>
        {/* <h1>{value.profile.firstName}</h1> */}

      </SectionWrapper>
    </>
  )
}


export default Preview