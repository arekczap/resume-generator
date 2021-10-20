import React, { useState } from 'react'
import styled from 'styled-components/macro'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import ModalButton from 'components/shared/AddItemButton'
import HeaderBuilder from 'components/shared/HeaderBuilder'
import ListItem from 'components/shared/ListItem'
import Input from 'components/shared/Input'

import BasicModal from 'modals/BasicModal'

import { experienceSectionData } from 'data/experienceSectionData'

const WrapperContent = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid var(--color-primary-300);
  margin-top: 4rem;
  cursor: drag;
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
  const { name, desc } = props.data
  const { key, labelText, placeholderText, type } =
    experienceSectionData.inputData
  const { items: dataItems, sectionName } = props.stateData

  console.log(sectionName)

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <HeaderBuilder name={name} content={desc} />
      <Input
        labelName={labelText}
        placeholderName={placeholderText}
        type={type}
        sectionId={props.sectionId}
        id={key}
        fullWidth={true}
      />
      <WrapperContent>
        {dataItems[0] ? (
          dataItems.map((values, i) => (
            <ListItem values={values} key={i}></ListItem>
          ))
        ) : (
          <EmptyWrapperContent>{'Lista jest pusta'}</EmptyWrapperContent>
        )}
      </WrapperContent>

      <ButtonWrapper>
        <ModalButton onClick={() => setShowModal((prev) => !prev)}>
          {'Dodaj pozycję'}
        </ModalButton>
        <BasicModal
          childrenType={props.sectionId}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </ButtonWrapper>

      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            // <div
            //   ref={provided.innerRef}
            //   style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            //   {...provided.droppableProps}
            // >
            //   <h2>I am a droppable!</h2>
            //   
            // </div>
            <WrapperContent ref={provided.innerRef}>
              {
                ItemsList.map((item, i) => (
                  <Draggable
                    draggableId={"draggable-" + item.id}
                    key={item.id}
                    index={i}
                  >
                    {(provided) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name}
                      </ListItem>
                    )}
                  </Draggable>
                ))
              }
            </WrapperContent>

          )}




        </Droppable>
      </DragDropContext> */}
    </>
  )
}

export default Experience
