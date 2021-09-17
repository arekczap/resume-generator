import React from 'react'
import styled from 'styled-components'


const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid gray;
  color: white;
  letter-spacing: var(--spacing-medium);
`

const Heading = styled.h2`
  width: 100%;
  font-weight: 500;
  font-size: 2.2rem;
  padding-bottom: 1.5rem;
`

const HeaderContent = styled.span`
  font-weight: 400;
  line-height: 2.3rem;
  font-size: 1.4rem;
  display: inline-block;
  padding-bottom: 1.5rem;
`

const HeaderBuilder = ({ name, content }) => {
  return (
    <HeaderWrapper>
      {
        content
          ? <>
            <Heading big={false}>{name}</Heading>
            <HeaderContent>{content}</HeaderContent>
          </>
          : <Heading big={true}>{name}</Heading>
      }
    </HeaderWrapper >
  )
}

export default HeaderBuilder
