import React from 'react'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import HeaderBuilder from 'components/shared/HeaderBuilder'


const WrapperContent = styled.div`
  width: 95%;
  /* height: 50%; */
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  border: 1px solid var(--color-primary-500);
  margin-top: 2rem;
  cursor: drag;
`

const ListItem = styled.div`
  width: 100%;
  height: 7.5rem;
  border: 1px solid red;
  margin: 1px 0;
  /* cursor: grab; */
`

const ItemsList = [
  {
    id: 1,
    text: 'aaa'
  },
  {
    id: 2,
    text: 'bbbb'
  },
  {
    id: 3,
    text: 'ccc'
  }
]

const Experience = (props) => {


  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
  }
  return (
    <>
      <HeaderBuilder name={props.data.name} content={props.data.desc} />
      <DragDropContext onDragEnd={onDragEnd}>
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
      </DragDropContext>
    </>
  )
}

export default Experience
