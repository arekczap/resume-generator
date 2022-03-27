import React, { useState, useCallback, useContext, useReducer } from 'react'
import styled from 'styled-components/macro'
import produce from 'immer'

import Switch from '@mui/material/Switch'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ResumeContext } from 'contexts/ResumeContext'
import { reorderArray } from 'utils/reorderArray'
import BasicModal from 'modals/BasicModal'

import { BiDotsVerticalRounded as DotsVertical } from 'react-icons/bi'
import { BsChevronUp } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'

const Wrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  border: 1px solid var(--color-primary-300);

  display: flex;
  flex-direction: row;
`

const ItemWrapper = styled.div`
  margin-left: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;
`

const ItemText = styled.span`
  display: block;
  color: var(--color-primary-600);
  line-height: 1.7rem;

  &:nth-child(1) {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &:nth-child(2) {
    font-size: 1.3rem;
    margin-top: 0.1rem;
  }

  &:nth-child(3) {
    font-size: 1.1rem;
    margin-top: 0.4rem;
  }
`

const ButtonsWrapper = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReactIconsDotsVertical = styled(DotsVertical)(() => ({
  color: 'var(--color-primary-600)',
  cursor: 'pointer',
  marginLeft: '1.5rem',
}))

const MaterialMenuItem = styled(MenuItem)(({ color }) => ({
  cursor: 'pointer',
  justifyContent: 'center !important',
  fontSize: '1.5rem !important',
  fontFamily: 'Montserrat !important',
  color: `${color === 'red' ? 'red !important' : 'white'}`,
}))

const MoveIconsWrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`

const ListItem = (props) => {
  const [globalState, setGlobalState] = useContext(ResumeContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const { position, companyName, city, startDate, endDate } = props.itemData
  const { sectionId, itemIndex } = props

  const handleOpenItemMenu = useCallback((event) => setAnchorEl(event.currentTarget), [])
  const handleCloseItemMenu = useCallback(() => setAnchorEl(null), [])

  const toggleShowItem = useCallback(() => {
    setGlobalState(
      produce(globalState, (draftState) => {
        let isVisible = draftState[sectionId].items[itemIndex].visible
        draftState[sectionId].items[itemIndex].visible = !isVisible
      })
    )
  }, [setGlobalState, sectionId, itemIndex, globalState])

  const handleMoveItem = useCallback(
    (type) => {
      setGlobalState(
        produce(globalState, (draftState) => {
          draftState[props.sectionId].items = reorderArray(
            draftState[props.sectionId].items,
            itemIndex,
            type === 'moveDown' ? itemIndex + 1 : itemIndex - 1
          )
        })
      )
      handleCloseItemMenu()
    },
    [globalState, itemIndex, props.sectionId, setGlobalState, handleCloseItemMenu]
  )
  const handleEditItem = useCallback(() => {
    // TODO: dokończyć edycje poszczególnego pola w tablicy
    props.setTryEditData(true)
  }, [props])

  const handleRemoveItem = useCallback(() => {
    setGlobalState(
      produce(globalState, (draftState) => {
        draftState[props.sectionId].items.splice(itemIndex, 1)
      })
    )
    handleCloseItemMenu()
  }, [globalState, handleCloseItemMenu, itemIndex, props.sectionId, setGlobalState])

  return (
    <Wrapper>
      <ItemWrapper>
        <ItemText>{`${companyName},  ${city}`}</ItemText>
        <ItemText>{`${position}`}</ItemText>
        <ItemText>{`${startDate} - ${endDate}`}</ItemText>
      </ItemWrapper>
      <ButtonsWrapper>
        <Switch
          style={{ fontSize: '35px' }}
          size="50px"
          color="primary"
          name="toggleSwitch"
          checked={globalState[sectionId].items[itemIndex].visible}
          onChange={() => toggleShowItem()}
        />
        <ReactIconsDotsVertical size="2.5rem" onClick={handleOpenItemMenu} />
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseItemMenu}
        >
          <MoveIconsWrapper>
            <MaterialMenuItem
              sx={{ p: 1.5 }}
              disabled={itemIndex === 0 ? true : false}
              onClick={() => handleMoveItem()}
            >
              <BsChevronUp disabled size="3rem" />
            </MaterialMenuItem>
            <MaterialMenuItem
              sx={{ p: 1.5 }}
              disabled={itemIndex + 1 === globalState[sectionId].items.length ? true : false}
              onClick={() => handleMoveItem('moveDown')}
            >
              <BsChevronDown size="3rem" />
            </MaterialMenuItem>
          </MoveIconsWrapper>
          <MaterialMenuItem onClick={() => handleEditItem()}>Edytuj</MaterialMenuItem>
          <MaterialMenuItem color={'red'} onClick={() => handleRemoveItem()}>
            Usuń
          </MaterialMenuItem>
        </Menu>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default ListItem
