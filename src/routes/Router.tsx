import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import CategoryList from "../pages/CategoryList";
import Home from "../pages/Home";
import NewCategory from "../pages/NewCategory";
import ToDoList from "../ToDoList";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/custom/:cusID" element={<ToDoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
