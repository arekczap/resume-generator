import React, { useContext, useState, useCallback, useEffect } from 'react'
import styled from 'styled-components/macro'

import { AiFillCheckCircle } from 'react-icons/ai'
import { ResumeContext } from 'contexts/ResumeContext'
import ToolbarText from 'components/Input/ToolbarText'

const Wrapper = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'calc(50% - 0.5rem)')};
  display: 'block';
  position: relative;
  margin-top: 20rem;
  background-color: var(--color-primary-200);
  border-radius: 7px;
  letter-spacing: var(--spacing-small);
  user-select: none;
  margin: 0.8rem 0;
  text-overflow: ellipsis;
  z-index: 2;
  transition: box-shadow 0.1s;
  border: ${({ isValidated }) => (isValidated ? '1px solid transparent' : '1px solid red')};
  /* border: 1px solid transparent;
  border: 1px solid red; */

  &:hover {
    border: ${({ isValidated }) =>
      isValidated ? '1px solid var(--color-primary-700)' : '1px solid red'};
  }
`

const LabelName = styled.div`
  position: absolute;
  width: 100%;
  height: 3.5rem;
  padding: 0.8rem 0 0 2rem;
  font-size: 1.3rem;
  color: var(--color-primary-600);
  z-index: ${({ depth }) => depth};
  cursor: text;
`

const InputField = styled.input`
  width: 100%;
  padding: 3rem 5rem 1rem 2.2rem;
  border-radius: 7px;
  font-size: 1.3rem;
  border: none;
  outline: none;
  height: 5.8rem;
  font-family: 'Montserrat';
  color: var(--color-primary-900);
  background-color: var(--color-primary-200);
  letter-spacing: var(--spacing-small);
  border: 1px solid transparent;

  &::placeholder {
    opacity: 0.8;
  }

  &:focus {
    border: ${({ isValidated }) =>
      isValidated ? '1px solid var(--color-primary-700)' : '1px solid red'};
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 2rem;
    height: 2rem;
    bottom: 0;
    right: 5rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
  }
`

const Input = (props) => {
  const {
    labelName,
    placeholderName,
    type,
    sectionId,
    id,
    onChange,
    name,
    validateElements,
    tryCloseModalState,
  } = props

  const [globalState, setGlobalState] = useContext(ResumeContext)
  const [inputValue, setInputValue] = useState('')
  const [isRequired, setIsRequired] = useState(false)
  const [isValidated, setIsValidated] = useState(true)

  const handleUpdateValue = useCallback(
    (evt) => {
      let value = null
      type === 'textfield' ? (value = evt) : (value = evt.target.value)
      setInputValue(value)

      if (id) {
        //like inputs in normal sections without modals, like Section name or website link
        setGlobalState((prevState) => ({
          ...prevState,
          [sectionId]: { ...prevState[sectionId], [id]: value },
        }))
      } else {
        //like modal fields
        onChange(name, value)
      }
    },
    [id, sectionId, setGlobalState, onChange, type, name]
  )

  useEffect(() => {
    if (validateElements) {
      validateElements.forEach((element) => {
        if (element === name) setIsRequired(true)
      })
    }

    if (isRequired && tryCloseModalState) {
      inputValue ? setIsValidated(true) : setIsValidated(false)
    }
  }, [name, validateElements, inputValue, isRequired, tryCloseModalState])

  return (
    <>
      {
        <Wrapper {...props} isValidated={isValidated}>
          <label>
            <LabelName depth={type === 'textfield' ? -1 : 1}>{labelName}</LabelName>
            {type === 'text' && (
              <InputField
                autoComplete={'off'}
                spellCheck={false}
                placeholder={placeholderName}
                onChange={handleUpdateValue}
                name={name}
                // set section name to default value eg. "Doświadczenie"
                value={id && globalState[sectionId][id]}
                isValidated={isValidated}
              />
            )}

            {type === 'date' && (
              <InputField
                name={name}
                type={'date'}
                min="1995-01"
                max="2023-12"
                onChange={handleUpdateValue}
                isValidated={isValidated}
              />
            )}
          </label>

          {type === 'textfield' && (
            <ToolbarText
              name={name}
              autoComplete={'off'}
              spellCheck={false}
              wrap="off"
              placeholder={placeholderName}
              setValue={handleUpdateValue}
            />
          )}
          <AiFillCheckCircle
            style={{
              position: 'absolute',
              fill: 'var(--color-primary-900)',
              width: '2rem',
              height: '5.8rem',
              right: '1.5rem',
              top: '0',
              opacity: inputValue !== '' && id !== 'sectionName' ? '1' : '0',
              transition: 'opacity .4s',
              pointerEvents: 'none',
            }}
          />
        </Wrapper>
      }
    </>
  )
}

export default Input
