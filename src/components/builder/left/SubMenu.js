import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SidebarLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 1.9rem;
  padding: 0 2.5rem 0 2.5rem;
  text-decoration: none;
  line-height: 6rem;
  letter-spacing: var(--spacing-small);
  cursor: pointer;
   user-select: none;
  transition: background-color 0.2s;

    
  & > svg {
    font-size: 2.5rem;
  }

  & > svg > path, polyline {
    stroke: white;
  }

  :hover {
    background-color: var(--color-black-medium);
  }
`

const SidebarLabel = styled.span`
  /* padding: 0 2rem 0 2rem; */
`


const DropDownLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  line-height: 5.5rem;
  margin: 0 2rem;
  padding: 0 2rem 0 3rem;
  border-radius: 5px;
  transition: background-color 0.2s;
  letter-spacing: var(--spacing-small);

  :hover {
    background-color: var(--color-black-light);
  }
`



const SubMenu = ({ item }) => {
  const [subnav, sideBar] = useState(true)
  const toogleSidebar = () => sideBar(!subnav)


  return (
    <>
      <SidebarLink onClick={toogleSidebar} >
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
        {
          subnav
            ? item.iconOpen
            : item.subNav
              ? item.iconClosed
              : null
        }
      </SidebarLink>
      {
        subnav && item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropDownLink>
          )
        })
      }

    </>
  )
}

export default SubMenu