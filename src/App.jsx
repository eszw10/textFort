import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ColumnarEnc from "./pages/ColumnarEnc"
import ColumnarDec from "./pages/ColumnarDec"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/columnarEnc" element={<ColumnarEnc/>}></Route>
        <Route path="/columnarDec" element={<ColumnarDec/>}></Route>
      </Routes>
    </div>
  )
}

export default App
