import styled from "styled-components";
import { Link, Outlet, useMatch } from "react-router-dom";
import NewCategory from "./NewCategory";
import CategoryList from "./CategoryList";
import { Helmet } from "react-helmet";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 0px;
  gap: 0px;
`;

export const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.bgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  a {
    display: block;
  }
`;
function Home() {
  return (
    <>
      <Helmet>
        <title>To-Do</title>
      </Helmet>
      <Container>
        <Header>
          <Title>💙My To Do List💙</Title>
        </Header>
        <Tabs>
          <Tab>Make your Category</Tab>
          <Tab>
            <NewCategory />
          </Tab>
        </Tabs>
        <CategoryList />
      </Container>
    </>
  );
}

export default Home;
