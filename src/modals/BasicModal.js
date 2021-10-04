import React from 'react'
import styled from 'styled-components/macro'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { modalsData } from 'data/modalsData'
import ModalButton from 'components/shared/AddItemButton'

const style = {
  backgroundColor: 'var(--color-primary-100)',
  minWidth: '60rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
  outline: 'none',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

const ButtonsWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 55%;
  width: 43%;
  display: flex;
  justify-content: space-between;
`

const BasicModal = ({
  showModal,
  childrenType,
  setShowModal
}) => {
  const handleClose = () => setShowModal(false)

  return (
    <>
      <Modal
        open={showModal}
        // open={true}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          {
            modalsData.map((item) => {
              if (item.modalName === childrenType) return <item.component
                type={childrenType}
                key={item}
              />
            })
          }
          <ButtonsWrapper>
            <ModalButton onClick={handleClose}>{'Anuluj'}</ModalButton>
            <ModalButton>{'Dodaj stanowisko'}</ModalButton>
          </ButtonsWrapper>

        </Box>


      </Modal>
    </>
  )
}

export default BasicModal
