import React from 'react'
import HeaderBuilder from 'components/shared/HeaderBuilder'

const Experience = (props) => {
  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc}></HeaderBuilder>
    </>
  )
}

export default Experience
