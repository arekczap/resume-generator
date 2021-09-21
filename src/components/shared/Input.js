import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from "react-icons/ai"


const InputWrapper = styled.div`
  width: ${({ type }) => type === 'text' ? 'calc(50% - 1rem)' : '100%'};
  display: ${({ disabled }) => disabled === false ? 'block' : 'none'};
  position: relative;
  margin-top: 20rem;
  background-color: var(--color-neutral);
  border-radius: 7px;
  letter-spacing: var(--spacing-small);
  user-select: none;
  margin: 1rem 0;
  text-overflow: ellipsis;
`
const LabelName = styled.div`
  position: absolute;
  padding: .8rem 0 0 2rem;
  font-size: 1.3rem;
  `

const InputField = styled.input`
  width: 100%;
  padding: 3rem 5rem 1rem 2.2rem;
  border-radius: 7px;
  font-size: 1.2rem;
  border: none;
  outline: none;
  height: 5.8rem;
  font-family: 'Montserrat';
  letter-spacing: var(--spacing-small);
  
  
  ::placeholder {
    opacity: 0.5;
  }
`

const TextArea = styled(InputField)`
  resize: none;
  height: 6rem;
  margin-top: 3rem;
  padding: 0.2rem 5rem 1rem 2.2rem;
  background-color: var(--color-neutral);
  line-height: 2rem;
`



const Input = ({ labelName, placeholderName, disabled, type }) => {
  const [value, setValue] = useState('')
  const changeValue = (e) => setValue(e.target.value)

  return (
    <>
      {
        <InputWrapper type={type} disabled={disabled}>
          <LabelName>{labelName}</LabelName>
          {type === 'text'
            ? <InputField placeholder={placeholderName} onChange={changeValue}></InputField>
            : <TextArea
              as='textarea'
              wrap="off"
              placeholder={placeholderName}
              onChange={changeValue}
            />
          }
          <AiFillCheckCircle
            style={
              {
                position: 'absolute',
                fill: 'blue',
                width: '2rem',
                height: '5.8rem',
                right: '1.5rem',
                transition: 'opacity .4s',
                opacity: value ? '1' : '0',
                pointerEvents: 'none',
              }
            }
          />
        </InputWrapper >

      }
    </>
  )
}

export default Input
