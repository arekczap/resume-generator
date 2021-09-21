import React from 'react'
import styled from 'styled-components'
import { BsPersonPlusFill } from "react-icons/bs"


const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20rem;
  background-color: var(--color-neutral);
  border-radius: 7px;
  letter-spacing: var(--spacing-small);
  user-select: none;
  margin: 1rem 0;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  padding: 1.2rem 1.5rem;
`

const PhotoUpdateFieldWrapper = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  width: 6rem;
  min-height: 6rem;
  max-height: 6rem;
  height: 6rem;
  border: 1px dashed black;
  border-radius: 7px;
  transition: background-color 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
 
  :hover {
    background-color: rgba(224, 224, 224, 0.7);
  }
`

const UploadImageFieldLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const UploadImageFieldInput = styled.input.attrs(
  {
    type: 'file',
    autocomplete: 'off',
    accept: 'image/gif,image/jpg,image/jpeg,image/png'
  })
  `
  width: 100%;
  height: 100%;
  visibility:hidden;
  display:none; 
`

const TextContentWrapper = styled.div`
  margin-left: 2rem;
`

const HeaderText = styled.h2`
  font-size: 1.4rem;
  
`

const HintText = styled.li`
 font-size: 1.2rem;
 margin: 0.5rem 0 0 2rem;

 ::marker {
   color: black;
  font-size: 1.5rem;
 }
`


const PhotoInput = (props) => {
  const { headerText, hints } = props.data

  return (
    <>
      <MainWrapper>
        <PhotoUpdateFieldWrapper>
          <UploadImageFieldLabel htmlFor={'imgFile'}>
            <BsPersonPlusFill style={
              {
                width: '70%',
                height: '70%',
                opacity: '0.7',
              }
            } />
          </UploadImageFieldLabel>
          <UploadImageFieldInput id={'imgFile'} />
        </PhotoUpdateFieldWrapper>
        <TextContentWrapper>
          <HeaderText>{headerText}</HeaderText>
          <ul>
            {
              hints.map((item, index) => {
                return <HintText key={index}>{item}</HintText>
              })
            }
          </ul>
        </TextContentWrapper>
      </MainWrapper>
    </>
  )
}

export default PhotoInput
