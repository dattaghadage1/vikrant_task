import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
