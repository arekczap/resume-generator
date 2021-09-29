import React from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { modalsData } from 'data/modalsData'


const style = {
  backgroundColor: 'var(--color-primary-100)',
  minWidth: '60rem',
  height: '20%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
  outline: 'none',
  padding: '2rem',
}

const BasicModal = ({ showModal, childrenType, setShowModal }) => {
  const handleClose = () => setShowModal(false)

  return (
    <>
      <Modal
        // open={showModal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          {
            modalsData.map((item) => {
              if (item.key === childrenType) {
                return <item.component
                  key={item}
                  
                />
              }
            })
          }
        </Box>

      </Modal>
    </>
  )
}

export default BasicModal
