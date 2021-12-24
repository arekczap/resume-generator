import React, { useState, useEffect, useCallback } from 'react'

import HeaderBuilder from 'components/HeaderBuilder'
import Input from 'components/Input/Input'
import { experienceModalData } from 'data/modals/experienceModalData'

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
  const [validateElements, setValidateElements] = useState()

  const handleChange = useCallback((evt) => {
    const { name, value } = evt.target
    setExperienceData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }, [])

  useEffect(() => {
    const requiredArray = []
    experienceModalData.forEach(({ name, required }) => {
      if (required) requiredArray.push(name)
    })
    setValidateElements(requiredArray)
  }, [])

  useEffect(() => {
    addPositionFn(experienceData, validateElements)
  }, [addPositionFn, experienceData, validateElements])

  return (
    <>
      <HeaderBuilder name={'Dodaj stanowisko'} />
      {experienceModalData.map(({ labelName, placeholderName, type, name, fullWidth }) => (
        <Input
          key={name}
          labelName={labelName}
          placeholderName={placeholderName}
          type={type}
          sectionId={childrenType}
          name={name}
          fullWidth={fullWidth}
          // temp
          // value={experienceData[name]}
          onChange={handleChange}
        />
      ))}
    </>
  )
}

export default ExperienceModal
