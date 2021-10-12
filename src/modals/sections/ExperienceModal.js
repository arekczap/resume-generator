import React, { useEffect } from 'react'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'

const initialValues = {
  position: '',
  companyName: '',
  city: '',
  startDate: '',
  endDate: '',
  summary: '',
}

const ExperienceModal = ({ childrenType, addPositionFn, showModalState }) => {
  const [state, setState] = React.useState(initialValues)

  const handleChange = (evt) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
    addPositionFn(state)
  }

  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      {/* <form onSubmit={addPositionFn}> */}
      <Input
        labelName={'Nazwa firmy'}
        placeholderName={'ABC Corporation Int.'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={true}
        name={'companyName'}
        value={state.companyName}
        onChange={handleChange}
      />

      <Input
        labelName={'Stanowisko'}
        placeholderName={'Specjalista ds. Administracji'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="position"
        value={state.position}
        onChange={handleChange}
      />

      <Input
        labelName={'Miasto'}
        placeholderName={'Warszawa'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="city"
        value={state.city}
        onChange={handleChange}
      />

      <Input
        labelName={'Data rozpoczęcia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="startDate"
        value={state.startDate}
        onChange={handleChange}
      />

      <Input
        labelName={'Data zakończenia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="endDate"
        value={state.endDate}
        onChange={handleChange}
      />

      <Input
        labelName="Opis stanowiska"
        placeholderName=""
        type={'textfield'}
        sectionId={childrenType}
        fullWidth={true}
        name="summary"
        value={state.summary}
        onChange={handleChange}
      />
    </>
  )
}

export default ExperienceModal
