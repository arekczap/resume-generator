import React from 'react'
import styled from 'styled-components'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'
import PhotoInput from 'components/shared/PhotoInput'

import { AboutSectionData } from 'data/AboutSectionData'

const BasicDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const About = (props) => {

  console.log('rendered')
  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc} />
      <BasicDataWrapper>
        {
          AboutSectionData.basicData.map((item) => {
            return <Input
              labelName={item.labelText}
              placeholderName={item.placeholderText}
              active={item.disabled}
              type={item.type}
            />
          })
        }

        <PhotoInput></PhotoInput>
      </BasicDataWrapper>
    </>
  )
}

export default About
