import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'


const GroupName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;

  padding: 0 2.5rem 0 2.5rem;
  text-decoration: none;
  line-height: 6rem;
  letter-spacing: var(--spacing-small);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

    
  & > svg {
    font-size: 2.2rem;
  }

  & > svg > path, polyline {
    stroke: white;
  }

  :hover {
    background-color: var(--color-primary-200);
  }
`

const LinkLabel = styled.span`
  font-size: 1.4rem;
  margin-left: 0.5rem;
`

const DropDownLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  line-height: 5.5rem;
  margin: 0 1.6rem;
  padding: 0 2rem 0 3rem;
  border-radius: 5px;
  transition: background-color 0.2s;
  letter-spacing: var(--spacing-small);

  :hover {
    background-color: var(--color-primary-100);
  }
`

const SubMenu = ({ item }) => {
  const [subnav, sideBar] = useState(true)
  const toogleSidebar = () => sideBar(!subnav)


  return (
    <>
      <GroupName onClick={toogleSidebar} >
        {item.icon}
        <LinkLabel>{item.title}</LinkLabel>
        {
          subnav
            ? item.iconOpen
            : item.subNav
              ? item.iconClosed
              : null
        }
      </GroupName>
      {
        subnav && item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index}>
              <LinkLabel>{item.title}</LinkLabel>
            </DropDownLink>
          )
        })
      }

    </>
  )
}

export default SubMenu