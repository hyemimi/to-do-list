import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { categoryState, customState, toDoState } from "./atoms";
import { useParams } from "react-router-dom";
interface FormData {
  toDo: string;
}

function CreateToDo() {
  const { cusID } = useParams() as { cusID?: number };
  const [customList, setCustomList] = useRecoilState(customState);
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const handleValid = ({ toDo }: FormData) => {
    setToDos((oldToDos) => [
      {
        text: toDo,
        cusId: cusID,
        category: category,
        id: Date.now(),
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
