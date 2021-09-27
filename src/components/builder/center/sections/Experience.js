import React from 'react'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import HeaderBuilder from 'components/shared/HeaderBuilder'
import ListItem from 'components/shared/ListItem'
import Input from 'components/shared/Input'

import { experienceSectionData } from 'data/experienceSectionData'

const WrapperContent = styled.div`
  width: 95%;
  /* height: 50%; */
  display: flex;
  flex-wrap: wrap;
  border: 1px solid var(--color-primary-300);
  margin-top: 4rem;
  cursor: drag;
`


const Experience = (props) => {
  const { name, desc } = props.data
  const { key, labelText, placeholderText, type } = experienceSectionData.inputData

  console.log(props.sectionId)
  return (
    <>
      <HeaderBuilder name={name} content={desc} />
      <Input
        labelName={labelText}
        placeholderName={placeholderText}
        type={type}
        sectionId={props.sectionId}
        id={key}
      />
      <WrapperContent>

        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </WrapperContent>



















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
