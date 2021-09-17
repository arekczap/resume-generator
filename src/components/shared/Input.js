import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from "react-icons/ai"


const InputWrapper = styled.div`
  position: relative;
  margin-top: 20rem;
  border: 1px solid var(--color-neutral);
  border-radius: 7px;
  width: 30rem;
  letter-spacing: var(--spacing-small);
`
const LabelName = styled.div`
position: absolute;
padding: .8rem 0 0 2rem;
font-size: 1.3rem;
`

const InputInside = styled.input`
  width: 100%;
  padding: 3rem 5rem 1rem 2.2rem;
  border-radius: 7px;
  font-size: 1.5rem;
  border: none;
  background-color: var(--color-neutral);
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



const Input = () => {
  const [value, setValue] = useState('')
  const changeValue = (e) => setValue(e.target.value)

  useEffect(() => {

  })


  return (
    <InputWrapper>
      <LabelName>Imię</LabelName>
      <InputInside placeholder={'Jan'} onChange={changeValue}></InputInside>
      <AiFillCheckCircle
        style={
          {
            position: 'absolute',
            fill: 'blue',
            width: '2rem',
            height: '5.8rem',
            right: '1.5rem',
            transition: 'opacity .4s',
            opacity: value ? '1' : '0'
            // display: value ? 'inline-block' : 'none',
          }
        }
      />
    </InputWrapper >
  )
}

export default Input
