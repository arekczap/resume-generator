import React from 'react'
import styled from 'styled-components'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'
import PhotoInput from 'components/shared/PhotoInput'
import EditSectionLink from 'components/shared/EditSectionLink'


import { AboutSectionData } from 'data/AboutSectionData'

const BasicDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const SectionSettingsWrapper = styled.div`
  width: 100%;
  margin: 1.2rem 0;
`



const About = (props) => {
  const { basicData, photoData, extraData } = AboutSectionData
  const { name, desc } = props.data

  const getInputFromData = (data) => {
    return data.map((item, index) => {
      return <Input
        labelName={item.labelText}
        placeholderName={item.placeholderText}
        disabled={item.disabled}
        type={item.type}
        key={index}
      />
    })
  }

  return (
    <>
      <HeaderBuilder name={name} content={desc} />
      <BasicDataWrapper>
        <SectionSettingsWrapper>
          <EditSectionLink>Edytuj sekcję</EditSectionLink>
        </SectionSettingsWrapper>
        {getInputFromData(basicData)}
        <PhotoInput data={photoData} />
        {getInputFromData(extraData)}
      </BasicDataWrapper>
    </>
  )
}

export default About
