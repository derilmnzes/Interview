import "./Css/Main.css";
import { useContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import CategoriesList, { categoryListLoader } from "./Pages/CategoriesList";
import Layout, { categoryloader } from "./Layout/Layout";
import ProductDetail, { productDetailLoader } from "./Pages/ProductDetail";
const errorElement = (
  <div className="error">
  Please try again,Something went wrong
</div>
)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div>
          <Layout />
          <Outlet />
        </div>
      }
      errorElement={errorElement}
      loader={categoryloader}
    >
      <Route errorElement={errorElement} index loader={categoryListLoader} element={<CategoriesList />} />
      <Route
        index
        path="/:category/:id"
        loader={productDetailLoader}
        element={<ProductDetail />}
        errorElement={errorElement}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
