import React, { useState, useEffect } from 'react'

import HeaderBuilder from 'components/HeaderBuilder'
import Input from 'components/Input'

const initialValues = {
  position: '',
  companyName: '',
  city: '',
  startDate: '',
  endDate: '',
  summary: '',
}

const ExperienceModal = ({ childrenType, addPositionFn }) => {
  const [experienceData, setExperienceData] = useState(initialValues)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    addPositionFn(experienceData)
  }, [addPositionFn, experienceData])

  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      <Input
        labelName={'Nazwa firmy'}
        placeholderName={'ABC Corporation Int.'}
        type={'text'}
        sectionId={childrenType}
        name={'companyName'}
        fullWidth={true}
        value={experienceData.companyName}
        onChange={handleChange}
      />

      <Input
        labelName={'Stanowisko'}
        placeholderName={'Specjalista ds. Administracji'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name={'position'}
        value={experienceData.position}
        onChange={handleChange}
      />

      <Input
        labelName={'Miasto'}
        placeholderName={'Warszawa'}
        type={'text'}
        sectionId={childrenType}
        fullWidth={false}
        name={'city'}
        value={experienceData.city}
        onChange={handleChange}
      />

      <Input
        labelName={'Data rozpoczęcia'}
        placeholderName={'Miesiąc Rok'}
        type={'date'}
        sectionId={childrenType}
        fullWidth={false}
        name={'startDate'}
        value={experienceData.startDate}
        onChange={handleChange}
      />

      <Input
        labelName={'Data zakończenia'}
        placeholderName={'Miesiąc Rok'}
        type={'date'}
        sectionId={childrenType}
        fullWidth={false}
        name={'endDate'}
        value={experienceData.endDate}
        onChange={handleChange}
      />

      <Input
        labelName="Opis stanowiska"
        placeholderName=""
        type={'textfield'}
        sectionId={childrenType}
        fullWidth={true}
        name={'summary'}
        value={experienceData.summary}
        onChange={handleChange}
      />
    </>
  )
}

export default ExperienceModal
