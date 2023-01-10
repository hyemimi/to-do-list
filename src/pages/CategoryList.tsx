import styled from "styled-components";

const List = styled.ul``;

const Category = styled.li`
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
  return <>카테고리 목록입니다</>;
}
export default CategoryList;
