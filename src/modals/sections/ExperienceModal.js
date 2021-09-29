import React from 'react'
import styled from 'styled-components/macro'


import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'






const ExperienceModal = (props) => {
  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      <Input
        labelName={'Nazwa firmy'}
        placeholderName={'ABC Corporation Int.'}
        type={'text'}
        sectionId={props.childrenType}
        id={null}
      />
    </>
  )
}

export default ExperienceModal
