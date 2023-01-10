import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  Categories,
  categoryState,
  customState,
  toDoSelector,
  toDoState,
} from "./atoms";
import CreateToDo from "./CreateToDo";
import { Container, Header, Title } from "./pages/Home";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const custom = useRecoilValue(customState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Header>
        <Title>
          To Dos
          <hr />
        </Title>
      </Header>

      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>7
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
