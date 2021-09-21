import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from "react-icons/ai"


const InputWrapper = styled.div`
width: calc(50% - 1rem);
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
pointer-events: none;
`

const InputInside = styled.input`
  width: 100%;
  padding: 3rem 5rem 1rem 2.2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  border: none;
  outline: none;
  height: 5.8rem;
  letter-spacing: var(--spacing-small);
  transition: background-color 0.2s ;
  
  ::placeholder {
    opacity: 0.5;
  }

  :hover {
    background-color: var(--color-neutral-400);
  }
`


const Input = ({ labelName, placeholderName, active, type }) => {
  const [value, setValue] = useState('')
  const changeValue = (e) => setValue(e.target.value)

  return (
    <InputWrapper>
      <LabelName>{labelName}</LabelName>
      <InputInside placeholder={placeholderName} onChange={changeValue}></InputInside>
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
  )
}

export default Input
