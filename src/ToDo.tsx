import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";
/* [
  {
    text: "5",
    id: 1673312544678,
    category: "TO_DO",
  },
  {
    text: "4",
    id: 1673312544169,
    category: "TO_DO",
  },
  {
    text: "3",
    id: 1673312543694,
    category: "TO_DO",
  },
  {
    text: "2",
    id: 1673312542182,
    category: "TO_DO",
  },
  {
    text: "write",
    id: 1673309137381,
    category: "TO_DO",
  },
]; */
function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <li>
        <span>{text}</span>

        {category !== "DOING" && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}
        {category !== "TO_DO" && (
          <button name="TO_DO" onClick={onClick}>
            To Do
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
      </li>
    </>
  );
}

export default ToDo;
