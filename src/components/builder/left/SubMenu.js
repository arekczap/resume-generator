import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 2rem;
  height: 5rem;
  padding: 0 2.5rem 0 2.5rem;
  text-decoration: none;
  line-height: 3remrem;
  letter-spacing: 1.3px;
  transition: background-color 0.2s;
    
  & > svg {
    font-size: 2.5rem;
  }

  & > svg > path, polyline {
    stroke: white;
  }

  
  :hover {
    background-color: rgba(18, 18, 15, 0.5);
  }
`

const SidebarLabel = styled.span`
  /* padding: 0 2rem 0 2rem; */
`


const DropDownLink = styled(Link)`
background-color: red;
`



class SubMenu extends React.Component {
  state = {
    subnav: false
  }

  toogleSubnav = () => this.setState({ subnav: !this.state.subnav })


  render() {
    const { item } = this.props
    return (
      <>

        <SidebarLink to={item.path} onClick={this.toogleSubnav} >
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          {
            this.state.subnav
              ? item.iconOpen
              : item.subNav
                ? item.iconClosed
                : null
          }
        </SidebarLink>
        {
          this.state.subnav && item.subNav.map((item, index) => {
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



}


export default SubMenu