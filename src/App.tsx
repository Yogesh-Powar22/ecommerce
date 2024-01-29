import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {GlobalContextProvider} from "./assets/component/context/globalContext";
import Navbar from "./assets/component/navbar";
import Cart from "./assets/component/context/cart";
import Mens from "./assets/component/mens";
import Womens from "./assets/component/womens";
import Home from "./assets/component/home";
import Jewellery from "./assets/component/jewellery";

function App() {
  // const [userName, setUserName] = useState<any>("yogesh");

  return (
    <>
      <div style={{width: '95%', margin: '0 auto'}}>
        <GlobalContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/mens" element={<Mens/>} />
              <Route path="/womens" element={<Womens />} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </GlobalContextProvider>
      </div>
    </>
  );
}

export default App;
