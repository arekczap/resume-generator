import React from 'react'
import styled from 'styled-components/macro'
import { BsPersonPlusFill } from 'react-icons/bs'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20rem;
  background-color: var(--color-primary-200);
  border-radius: 7px;
  letter-spacing: var(--spacing-small);
  user-select: none;
  margin: 1rem 0;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  padding: 1.2rem 1.5rem;
`

const UpdateFieldWrapper = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  width: 6rem;
  min-height: 6rem;
  max-height: 6rem;
  height: 6rem;
  border: 1px dashed var(--color-primary-900);
  border-radius: 7px;
  transition: background-color 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-primary-300);
  }
`

const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const UploadInput = styled.input.attrs({
  type: 'file',
  autocomplete: 'off',
  accept: 'image/gif,image/jpg,image/jpeg,image/png',
})`
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: none;
`

const TextContentWrapper = styled.div`
  margin-left: 2rem;
  color: var(--color-primary-600);
`

const HeaderText = styled.h2`
  font-size: 1.4rem;
`

const HintText = styled.li`
  font-size: 1.2rem;
  margin: 0.5rem 0 0 2rem;

  &::marker {
    font-size: 1.5rem;
  }
`
const StyledBsPersonPlusFill = styled(BsPersonPlusFill)`
  width: 70%;
  height: 70%;
  opacity: 0.7;
  fill: var(--color-primary-900);
`

const PhotoInput = ({ headerText, hints }) => {
  return (
    <>
      <Wrapper>
        <UpdateFieldWrapper>
          <Label htmlFor={'imgFile'}>
            <StyledBsPersonPlusFill />
          </Label>
          <UploadInput id={'imgFile'} />
        </UpdateFieldWrapper>
        <TextContentWrapper>
          <HeaderText>{headerText}</HeaderText>
          <ul>
            {hints.map((item) => {
              return <HintText key={item}>{item}</HintText>
            })}
          </ul>
        </TextContentWrapper>
      </Wrapper>
    </>
  )
}

export default PhotoInput
