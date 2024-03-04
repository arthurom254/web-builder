
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Engine from './components/Engine/Engine';
import Base from './Base';
import Home from './Home';
function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Base/>}>
      <Route index element={<Home/>}/>
      <Route path='/builder/:id' element={<Engine/>}/>
    </Route>
  )
)
  return (
    <>
    <RouterProvider router={router}/>
      </>
  );
}

export default App;
