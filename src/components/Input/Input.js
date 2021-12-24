import React, { useContext, useState, useCallback } from 'react'
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
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--color-primary-700);
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
    border: 1px solid var(--color-primary-700);
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 2rem;
    height: 2rem;
    bottom: 0;
    right: 1rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
  }
`

const Input = ({
  labelName,
  placeholderName,
  type,
  sectionId,
  id,
  fullWidth,
  onChange,
  name,
  required,
}) => {
  const [state, setState] = useContext(ResumeContext)
  const [inputValue, setInputValue] = useState('')

  const handleUpdateValue = useCallback(
    (evt) => {
      evt.preventDefault()
      setInputValue(evt.target.value)
      setState((prevState) => ({
        ...prevState,
        [sectionId]: { ...prevState[sectionId], [id]: evt.target.value },
      }))
    },
    [id, sectionId, setState]
  )

  return (
    <>
      {
        <Wrapper type={type} id={id} fullWidth={fullWidth}>
          <label>
            <LabelName depth={type === 'textfield' ? -1 : 1}>{labelName}</LabelName>
            {type === 'text' && (
              <InputField
                autoComplete={'off'}
                spellCheck={false}
                placeholder={placeholderName}
                onChange={id ? handleUpdateValue : onChange}
                name={name}
                // set section name to default value eg. "Doświadczenie"
                value={id && state[sectionId][id]}
              />
            )}

            {type === 'date' && (
              <InputField
                name={name}
                type={'month'}
                min="1995-01"
                max="2023-12"
                placeholder={'miesiąc'}
                onChange={id ? handleUpdateValue : onChange}
                inputValue
              />
            )}
          </label>

          {type === 'textfield' && (
            <ToolbarText
              // onInput={autoResizeTextArea}
              autoComplete={'off'}
              spellCheck={false}
              wrap="off"
              placeholder={placeholderName}
              onChange={id ? handleUpdateValue : onChange}
            />
          )}
          <AiFillCheckCircle
            style={{
              position: 'absolute',
              fill: 'var(--color-primary-900)',
              width: '2rem',
              height: '5.8rem',
              right: '1.5rem',
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
