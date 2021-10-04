import React from 'react'
// import styled from 'styled-components/macro'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'

const initialValues = {
  position: '',
  companyName: '',
  city: '',
  website: '',
  startDate: '',
  endDate: '',
  summary: '',
}



const ExperienceModal = (props) => {


  console.log(props)

  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      <Input
        labelName={'Nazwa firmy'}
        placeholderName={'ABC Corporation Int.'}
        type={'text'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={true}
      />

      <Input
        labelName={'Stanowisko'}
        placeholderName={'Specjalista ds. Administracji'}
        type={'text'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={false}
      />

      <Input
        labelName={'Miasto'}
        placeholderName={'Warszawa'}
        type={'text'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={false}
      />

      <Input
        labelName={'Data rozpoczęcia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={false}
      />


      <Input
        labelName={'Data zakończenia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={false}
      />

      <Input
        labelName={'Opis stanowiska'}
        placeholderName={''}
        type={'textfield'}
        sectionId={props.childrenType}
        // value={values.companyName}
        fullWidth={true}
      />
    </>
  )
}

export default ExperienceModal
