import styled from "styled-components";
import { Link, Outlet, useMatch } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 0px;
  gap: 30px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.bgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.hoverColor : props.theme.textColor};
  a {
    display: block;
  }
`;
function Home() {
  const categoryMatch = useMatch("newcategory");
  const listMatch = useMatch("categorylist");
  const homeMatch = useMatch("/");
  return (
    <>
      <Container>
        <Header>
          <Title>💙My TO-DO-LIST💙</Title>
        </Header>
        <Tabs>
          <Link to={"newcategory"}>
            <Tab isActive={categoryMatch !== null}>Make your Category</Tab>
          </Link>
          <Link to={"categorylist"}>
            <Tab isActive={listMatch !== null}>Categories</Tab>
          </Link>
        </Tabs>
        {homeMatch !== null ? "투두리스트로 갓생 살자" : null}
        <Outlet />
      </Container>
    </>
  );
}

export default Home;
