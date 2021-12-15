import React from 'react'
import styled from 'styled-components/macro'


const Wrapper = styled.header`
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

const Content = styled.span`
  font-weight: 400;
  line-height: 2.3rem;
  font-size: 1.4rem;
  display: inline-block;
  padding-bottom: 1.5rem;
`

const HeaderBuilder = ({ name, content }) => {
  return (
    <Wrapper>
      {
        content
          ? <>
            <Heading big={false}>{name}</Heading>
            <Content>{content}</Content>
          </>
          : <Heading big={true}>{name}</Heading>
      }
    </Wrapper >
  )
}

export default HeaderBuilder
