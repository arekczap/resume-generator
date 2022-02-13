import React, { useState, useEffect, useCallback } from 'react'

import HeaderBuilder from 'components/HeaderBuilder'
import Input from 'components/Input/Input'

const initialValues = {
  position: '',
  companyName: '',
  city: '',
  startDate: '',
  endDate: '',
  summary: '',
}

const ExperienceModal = ({
  childrenType,
  modalInputsData,
  modalData,
  validateElements,
  tryCloseModalState,
}) => {
  const [experienceData, setExperienceData] = useState(initialValues)

  const handleChange = useCallback((evt) => {
    const { name, value } = evt.target
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }, [])

  useEffect(() => {
    modalInputsData(experienceData)
  }, [modalInputsData, experienceData])

  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      {modalData.map(({ labelName, placeholderName, type, name, fullWidth }) => (
        <Input
          key={name}
          labelName={labelName}
          placeholderName={placeholderName}
          type={type}
          sectionId={childrenType}
          name={name}
          fullWidth={fullWidth}
          validateElements={validateElements}
          onChange={handleChange}
          tryCloseModalState={tryCloseModalState}
        />
      ))}
    </>
  )
}

export default ExperienceModal
