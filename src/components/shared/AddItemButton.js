import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 1rem 3rem;
  background-color: transparent;
  border: 1px solid var(--color-primary-700);
  cursor: pointer;
  color: var(--color-primary-900);
  transition: background-color 0.2s;

  :hover {
    background-color: var(--color-primary-200);
  }
`


const AddItemButton = (props) => {
  return (
    <Button>
      {
        props.children
      }
    </Button>
  )
}

export default AddItemButton
