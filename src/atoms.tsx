import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
  cusId?: number;
}

export interface Icustom {
  title: string;
  id: number;
  todos: IToDo[];
}

const { persistAtom } = recoilPersist({
  key: "local",
  storage: localStorage,
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const customState = atom<Icustom[]>({
  key: "custom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
