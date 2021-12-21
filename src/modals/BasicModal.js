import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components/macro'
import { ResumeContext } from 'contexts/ResumeContext'
import { modalsData } from 'modals/modalsData'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ModalButton from 'components/AddItemButton'

const StyledBox = styled(Box)`
  background-color: var(--color-primary-100);
  min-width: 50rem;
  max-width: 80rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  outline: none;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

const BasicModal = ({ showModal, childrenType, setShowModal }) => {
  const [contextState, setContextState] = useContext(ResumeContext)
  const [itemData, setItemData] = useState()
  const handleClose = useCallback(() => setShowModal(false), [setShowModal])

  const handleAddItem = useCallback(() => {
    handleClose()
    setContextState((prevState) => ({
      ...prevState,
      [childrenType]: {
        ...prevState[childrenType],
        items: [...prevState[childrenType].items, itemData],
      },
    }))
    console.log(itemData)
    setItemData()
  }, [childrenType, handleClose, itemData, setContextState])

  return (
    <>
      <Modal open={showModal} onClose={handleClose} closeAfterTransition>
        <StyledBox>
          {modalsData
            .filter((section) => section.modalName === childrenType)
            .map((section) => {
              return (
                <section.component
                  type={childrenType}
                  key={section}
                  addPositionFn={(posItem) => {
                    setItemData(posItem)
                  }}
                  toggleModalState={showModal}
                />
              )
            })}
          <ButtonsWrapper>
            <ModalButton style={{ marginRight: ' 2rem' }} onClick={handleClose}>
              Anuluj
            </ModalButton>
            <ModalButton onClick={handleAddItem}>Dodaj pozycję</ModalButton>
          </ButtonsWrapper>
        </StyledBox>
      </Modal>
    </>
  )
}

export default BasicModal
