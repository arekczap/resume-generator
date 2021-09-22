import React from 'react'
import styled from 'styled-components'
import siteLogo from 'assets/logo.png'

import DownloadResume from 'components/builder/left/DownloadResume'
import { SidebarData } from 'data/SidebarData'
import SubMenu from 'components/builder/left/SubMenu'


const LeftSideBarWrapper = styled.div`
  width: 22rem;
  background-color: var(--color-primary-50);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`
const LogoImage = styled.img`
  margin: 3rem 4rem;
  cursor: pointer;
`

const NavWrap = styled.div`
  width: 100%;
  flex: 1 1;
  flex-direction: column;
  display: flex;
  align-items: left;
  overflow: auto;

  ::-webkit-scrollbar {
  display: none;
  }
`

const LeftSideBar = () => (
  <LeftSideBarWrapper>
    <LogoImage src={siteLogo} >
    </LogoImage>
    <NavWrap>
      {SidebarData.map((item, index) => {
        return <SubMenu item={item} key={index} />
      })}
    </NavWrap>
    {/* <DownloadResume></DownloadResume> */}
  </LeftSideBarWrapper >
)

export default LeftSideBar