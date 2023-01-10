import { useRecoilValue } from "recoil";
import { Icustom, toDoState } from "../atoms";

import { Link } from "react-router-dom";
import { Customs } from "./CategoryList";
function Category({ title, id }: Icustom) {
  return (
    <>
      <Link to={`/custom/${id}`} state={{ title: title }}>
        <div>{title}</div>
      </Link>
    </>
  );
}

export default Category;
