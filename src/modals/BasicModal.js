import React, { useState, useContext, useCallback, useEffect } from 'react'
import styled from 'styled-components/macro'
import { ResumeContext } from 'contexts/ResumeContext'
import { modalsData } from 'data/modals/modalsData'

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

const BasicModal = ({ toggleModalState, childrenType, setCloseModal }) => {
  const [contextState, setContextState] = useContext(ResumeContext)
  const [modalData, setModalData] = useState()
  const [validateElements, setValidateElements] = useState()
  const [tryCloseModalState, setTryCloseModal] = useState()

  const handleClose = useCallback(() => {
    setTryCloseModal()
    setCloseModal(false)
  }, [setCloseModal])

  const handleAddItem = useCallback(() => {
    const restValidatedKeys = validateElements.filter((key) => modalData[key] === '')
    setTryCloseModal(true)
    if (restValidatedKeys.length !== 0) return

    handleClose()
    setContextState((prevState) => ({
      ...prevState,
      [childrenType]: {
        ...prevState[childrenType],
        items: [...prevState[childrenType].items, modalData],
      },
    }))

    setModalData()
  }, [childrenType, handleClose, modalData, setContextState, validateElements])

  useEffect(() => {
    const requiredArray = []
    modalsData
      .filter((modal) => modal.modalName === childrenType)
      .forEach((currentModal) => {
        currentModal.modalData.forEach((item) => {
          if (item.required) requiredArray.push(item.name)
        })
      })

    setValidateElements(requiredArray)
  }, [childrenType, tryCloseModalState])

  return (
    <>
      <Modal open={toggleModalState} onClose={handleClose} closeAfterTransition>
        <StyledBox>
          {modalsData
            .filter((item) => item.modalName === childrenType)
            .map((item) => {
              return (
                <item.component
                  childrenType={childrenType}
                  key={item}
                  modalInputsData={(posItem) => {
                    setModalData(posItem)
                  }}
                  globalContext={contextState}
                  validateElements={validateElements}
                  modalData={item.modalData}
                  tryCloseModalState={tryCloseModalState}
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
