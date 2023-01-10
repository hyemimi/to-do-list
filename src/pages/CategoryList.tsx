import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { customState } from "../atoms";
import Category from "./Category";

const List = styled.ul``;

export const Customs = styled.li`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  a {
    padding: 20px;
    display: flex;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &: hover {
    a {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

function CategoryList() {
  const categorylist = useRecoilValue(customState);
  return (
    <>
      <List>
        {categorylist?.map((custom) => (
          <Customs>
            <Category key={custom.id} {...custom} />
          </Customs>
        ))}
      </List>
    </>
  );
}
export default CategoryList;
