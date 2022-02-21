import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { ResumeContext } from 'contexts/ResumeContext'

import ModalButton from 'components/AddItemButton'
import HeaderBuilder from 'components/HeaderBuilder'
import ListItem from 'components/ListItem'
import Input from 'components/Input/Input'
import { reorderArray } from 'utils/reorderArray'
import BasicModal from 'modals/BasicModal'

const WrapperContent = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid var(--color-primary-300);
  margin-top: 4rem;
  padding: 0 0.5rem;
  justify-content: center;

  cursor: drag;
  white-space: nowrap;
`

const EmptyWrapperContent = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-600);
  letter-spacing: 0.5px;
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  user-select: none;
`

const Experience = (props) => {
  const [contextState, setContextState] = useContext(ResumeContext)
  const { name, description } = props.data
  const { items: dataItems } = props.stateData

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return

    setContextState((prevState) => ({
      ...prevState,
      [props.sectionId]: {
        ...prevState[props.sectionId],
        items: reorderArray(
          contextState[props.sectionId].items,
          result.source.index,
          result.destination.index
        ),
      },
    }))
  }

  const [toggleModal, setToggleModal] = useState(false)

  return (
    <>
      <HeaderBuilder name={name} content={description} />
      <Input
        labelName={'Nazwa sekcji'}
        placeholderName={'Doświadczenie'}
        type={'text'}
        sectionId={props.sectionId}
        id={'sectionName'}
        fullWidth={true}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <WrapperContent ref={provided.innerRef} {...provided.draggableProps}>
              {dataItems[0] ? (
                dataItems.map((item, index) => (
                  <Draggable draggableId={'draggable-' + item.id} key={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={{
                          margin: '0.5rem 0',
                          width: '100%',
                          ...provided.draggableProps.style,
                        }}
                      >
                        <ListItem itemKey={item.id} sectionId={props.sectionId} itemData={item}>
                          {item.name}
                        </ListItem>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <EmptyWrapperContent>Lista jest pusta</EmptyWrapperContent>
              )}
              {provided.placeholder}
            </WrapperContent>
          )}
        </Droppable>
      </DragDropContext>
      <ButtonWrapper>
        <ModalButton onClick={() => setToggleModal((prev) => !prev)}>Dodaj</ModalButton>
        <BasicModal
          childrenType={props.sectionId}
          setCloseModal={() => setToggleModal((prev) => !prev)}
          toggleModalState={toggleModal}
        />
      </ButtonWrapper>
    </>
  )
}

export default Experience
