import {Home} from "./Screens/Home/Home.jsx"
import { SingleProduct } from "./Screens/SingleProduct/SingleProduct.jsx";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>

      {/* =====================================ROUTE=================================== */}

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>

      
    </>
  );
}

export default App;
