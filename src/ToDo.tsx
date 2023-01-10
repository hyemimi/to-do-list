import React from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";
import { Customs } from "./pages/CategoryList";
import styled from "styled-components";

const ToDoItem = styled.div`
  display: flex;
  margin: 10px;
  padding: 5px;
  align-items: center;
`;
function ToDo({ text, category, id, cusId }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const { cusID } = useParams() as { cusID?: number };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo?.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, cusId, category: name as any };
      console.log(oldToDo, newToDo);

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      console.log("delete this", oldToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const ToDo = styled.li`
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.bgColor};

    margin-bottom: 3px;
    padding: 10px;
    border-radius: 5px;
    a {
      padding: 20px;
      display: flex;
      transition: color 0.2s ease-in;
      align-items: baseline;
    }
  `;
  const Button = styled.button`
    margin: 5px;
    border-color: ${(props) => props.theme.accentColor};
    border-radius: 10px;
    background-color: ${(props) => props.theme.accentColor};
    &: hover {
      color: ${(props) => props.theme.hoverColor};
    }
  `;
  return (
    <>
      <ul>
        <ToDoItem>
          <ToDo>
            <span>{text}</span>

            {category !== Categories.DOING && (
              <Button name={Categories.DOING} onClick={onClick}>
                Doing
              </Button>
            )}
            {category !== Categories.TO_DO && (
              <Button name={Categories.TO_DO} onClick={onClick}>
                To Do
              </Button>
            )}
            {category !== Categories.DONE && (
              <Button name={Categories.DONE} onClick={onClick}>
                Done
              </Button>
            )}
            <Button onClick={onDeleteHandler}>Delete</Button>
          </ToDo>
        </ToDoItem>
      </ul>
    </>
  );
}

export default ToDo;
