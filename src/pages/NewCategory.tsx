import { useSetRecoilState, useRecoilValue } from "recoil";
import { customState } from "../atoms";
import { useForm } from "react-hook-form";
interface FormData {
  title: string;
}

function NewCategory() {
  const setCustom = useSetRecoilState(customState);
  //const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const handleValid = ({ title }: FormData) => {
    setCustom((oldCustom) => [
      { title: title, id: Date.now(), todos: [] },
      ...oldCustom,
    ]);
    setValue("title", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("title", {
            required: "Please write your custom To-Do-Title",
          })}
          placeholder="Write a title"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default NewCategory;
