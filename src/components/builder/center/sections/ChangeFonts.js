import React from 'react'
import HeaderBuilder from 'components/shared/HeaderBuilder'

const ChangeFonts = (props) => {
  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc}></HeaderBuilder>
    </>
  )
}

export default ChangeFonts
