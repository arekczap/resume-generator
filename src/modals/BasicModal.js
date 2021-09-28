import React, { useState } from 'react'
import Modal from '@mui/material/Modal'



const BasicModal = (props) => {

  return (
    <>
      <Modal
        open={props.showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          <div>{'aaaa'}</div>
        }
      </Modal>
    </>
  )
}

export default BasicModal
