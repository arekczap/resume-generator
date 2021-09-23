import React from 'react'
import styled from 'styled-components/macro'


import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'
import PhotoInput from 'components/shared/PhotoInput'

import { aboutSectionData } from 'data/aboutSectionData'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`



const About = (props) => {
  const { basicData, photoData, extraData } = aboutSectionData
  const { name, desc } = props.data


  const getInputFromData = (data) => {
    return data.map((item, index) => {
      return <Input
        labelName={item.labelText}
        placeholderName={item.placeholderText}
        disabled={item.disabled}
        type={item.type}
        key={index}
        sectionId={props.sectionId}
        id={item.key}
      />
    })
  }

  return (
    <>
      <HeaderBuilder name={name} content={desc} />
      <Wrapper>
        {getInputFromData(basicData)}
        <PhotoInput data={photoData} />
        {getInputFromData(extraData)}
      </Wrapper>
    </>
  )
}

export default About
