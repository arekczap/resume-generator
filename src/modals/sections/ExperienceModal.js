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

const ExperienceModal = ({ childrenType, addPositionFn }) => {
  const [stateValue, setStateValue] = React.useState(initialValues)

  const handleChange = (evt) => {
    const value = evt.target.value
    setStateValue({
      ...stateValue,
      [evt.target.name]: value,
    })
    addPositionFn(stateValue)
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
        value={stateValue.companyName}
        onChange={handleChange}
      />

      <Input
        labelName={'Stanowisko'}
        placeholderName={'Specjalista ds. Administracji'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="position"
        value={stateValue.position}
        onChange={handleChange}
      />

      <Input
        labelName={'Miasto'}
        placeholderName={'Warszawa'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="city"
        value={stateValue.city}
        onChange={handleChange}
      />

      <Input
        labelName={'Data rozpoczęcia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="startDate"
        value={stateValue.startDate}
        onChange={handleChange}
      />

      <Input
        labelName={'Data zakończenia'}
        placeholderName={'DD-MM-YYYY'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name="endDate"
        value={stateValue.endDate}
        onChange={handleChange}
      />

      <Input
        labelName="Opis stanowiska"
        placeholderName=""
        type={'textfield'}
        sectionId={childrenType}
        fullWidth={true}
        name="summary"
        value={stateValue.summary}
        onChange={handleChange}
      />
    </>
  )
}

export default ExperienceModal
