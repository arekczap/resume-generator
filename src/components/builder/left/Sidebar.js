import React from 'react'
import styled from 'styled-components/macro'
import siteLogo from 'assets/logo.png'

// import DownloadResume from 'components/builder/left/DownloadResume'
import { sidebarData } from 'data/sidebarData'
import SubMenu from 'components/builder/left/SubMenu'


const Wrapper = styled.div`
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
  <Wrapper>
    <LogoImage src={siteLogo} >
    </LogoImage>
    <NavWrap>
      {sidebarData.map((item, index) => {
        return <SubMenu item={item} key={index} />
      })}
    </NavWrap>
    {/* <DownloadResume></DownloadResume> */}
  </Wrapper >
)

export default LeftSideBar