import React from 'react'
import HeaderBuilder from 'components/HeaderBuilder'

const SetupSection = (props) => {
  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc}></HeaderBuilder>

    </>
  )
}

export default SetupSection
