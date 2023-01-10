import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import CategoryList from "../pages/CategoryList";
import Home from "../pages/Home";
import ToDoList from "../ToDoList";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="categorylist" element={<CategoryList />} />
          <Route path="newcategory" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
