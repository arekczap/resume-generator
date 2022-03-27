import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderBuilder from 'components/HeaderBuilder'
import Input from 'components/Input/Input'

const initialValues = {
  id: '',
  position: '',
  companyName: '',
  city: '',
  startDate: '',
  endDate: '',
  summary: '',
  visible: true,
}

const ExperienceModal = ({
  childrenType,
  modalInputsData,
  modalData,
  validateElements,
  tryCloseModalState,
  globalContext,
}) => {
  const [experienceData, setExperienceData] = useState(initialValues)
  const location = useLocation()

  const handleChange = useCallback(
    (name, value) => {
      setExperienceData((prevState) => ({
        ...prevState,
        id: globalContext[location.pathname.split('/').slice(-1)].items.length,
        [name]: value,
      }))
    },
    [globalContext, location.pathname]
  )

  useEffect(() => {
    modalInputsData(experienceData)
  }, [modalInputsData, experienceData, globalContext])

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
          onChange={(name, value) => handleChange(name, value)}
          tryCloseModalState={tryCloseModalState}
        />
      ))}
    </>
  )
}

export default ExperienceModal
