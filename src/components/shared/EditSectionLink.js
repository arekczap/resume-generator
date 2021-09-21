import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'

import { BsFillGearFill } from 'react-icons/bs'


const LinkWrapper = styled.div`
padding: 1rem;
display: inline-block;
background-color: var(--color-primary);
border-radius: 10px;
cursor: pointer;
color: white;
transition: background-color 0.2s;
user-select: none;
text-decoration: none;

:hover {
  background-color: var(--color-primary-light);
}
`

const LinkContentWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const LinkContentLabel = styled.span`
display: inline-block;
margin-left: 0.5rem;
`

const EditSectionLink = (props) => {
  return (
    <LinkWrapper>
      {/* <LinkContentWrapper>
        <BsFillGearFill style={{ display: 'inline-block' }} />
        <LinkContentLabel>{props.children}</LinkContentLabel>
        {

        }
      </LinkContentWrapper> */}

      {
        <Link to={'/content/personalData/aaa'}></Link>
      }
    </LinkWrapper>
  )
}

export default EditSectionLink
