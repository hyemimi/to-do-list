import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  Categories,
  categoryState,
  customState,
  toDoSelector,
  toDoState,
} from "./atoms";
import CreateToDo from "./CreateToDo";
import { Container, Header, Tab, Tabs, Title } from "./pages/Home";
import ToDo from "./ToDo";
import { Helmet } from "react-helmet";

function ToDoList() {
  const { cusID } = useParams() as { cusID?: number };
  const { state } = useLocation();

  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const targetList = toDos.filter((todo) => todo.cusId === cusID);

  return (
    <Container>
      <Helmet>
        <title>{state?.title}</title>
      </Helmet>
      <Header>
        <Title>
          {state?.title}
          <hr />
        </Title>
      </Header>
      <Tabs>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>

        <CreateToDo />
      </Tabs>
      {targetList?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
