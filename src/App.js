import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import './App.css';
import HomeCanvas from "./components/HomeCanvas";
import Canvas from './components/Canvas';
import Base from "./components/Base";
import Widgets from "./components/actions/Widgets";
import Style from "./components/actions/Style";
import Color from "./components/actions/Color";
import Elements from "./components/actions/Elements";
import Upload from "./components/actions/Upload";
import Preview from "./components/Preview";
function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Base/>}>
      <Route index element={<HomeCanvas/>}/>
      <Route path='/:projctid/edit' element={<Canvas/>}>
        <Route path="widgets" element={<Widgets/>}/>
        <Route path="elements" element={<Elements/>}/>
        <Route path="color" element={<Color/>}/>
        <Route path="style" element={<Style/>}/>
        <Route path="upload" element={<Upload/>}/>
      </Route>
      <Route path="/preview" element={<Preview/>}/>

    </Route>
  )
);
  return (
    <>       
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
