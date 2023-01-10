import { useRecoilValue } from "recoil";
import { Icustom } from "../atoms";
import ToDoList from "../ToDoList";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Customs } from "./CategoryList";
function Category({ title, id }: Icustom) {
  return (
    <>
      <Link to={`/custom/${id}`}>
        <div>{title}</div>
      </Link>
    </>
  );
}

export default Category;
