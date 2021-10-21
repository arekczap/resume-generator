import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Switch from '@mui/material/Switch'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { dateToString } from 'utils/dateToString'
import { BiDotsVerticalRounded as DotsVertical } from 'react-icons/bi'
import { BsChevronUp } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'

const Wrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  border-top: 1px solid var(--color-primary-300);
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  &:first-child {
    border-top: none;
  }
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
  }

  &:nth-child(3) {
    font-size: 1.1rem;
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
  const [anchorEl, setAnchorEl] = useState(null)
  const { position, companyName, city, startDate, endDate } = props.itemData
  const open = Boolean(anchorEl)

  console.log()

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleEdit = () => {
    console.log('edytuj')
  }
  const handleRemove = () => {
    console.log('usuń')
  }

  return (
    <Wrapper>
      <ItemWrapper>
        <ItemText>{`${companyName}, ${city}`}</ItemText>
        <ItemText>{`${position}`}</ItemText>
        <ItemText>{`${dateToString(startDate)} - ${dateToString(endDate)}`}</ItemText>
      </ItemWrapper>
      <ButtonsWrapper>
        <Switch style={{ fontSize: '35px' }} size="50px" color="primary" name="toggleSwitch" />
        <ReactIconsDotsVertical size="2.5rem" onClick={handleClick} />
        <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MoveIconsWrapper>
            <MaterialMenuItem onClick={handleClose}>
              <BsChevronUp disabled size="2.5rem" />
            </MaterialMenuItem>
            <MaterialMenuItem onClick={handleClose}>
              <BsChevronDown size="2.5rem" />
            </MaterialMenuItem>
          </MoveIconsWrapper>
          <MaterialMenuItem onClick={handleEdit}>{'Edytuj'}</MaterialMenuItem>
          <MaterialMenuItem color={'red'} onClick={handleRemove}>
            {'Usuń'}
          </MaterialMenuItem>
        </Menu>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default ListItem
