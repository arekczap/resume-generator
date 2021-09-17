import React from 'react'
import styled from 'styled-components'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'


const About = (props) => {

  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc} />
      <Input />
    </>
  )
}

export default About
