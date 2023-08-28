import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/index";
import SignUp from "./pages/signUpPage/index";
import Hotel from "./pages/hotelPage/index";
import Booking from "./pages/bookingPage/index";
import NotFound from "./pages/notFoundPage";

function App() {
  return (
    <div className="App">
    
    <div className="">
    <div className="flex text-red-400 bg-blue-500 h-[60px]">
      <div className="flex">
        <div className="flex">
          <div className="text-red-400">icon</div>
          <div className="flex">logo</div>
        </div>
        <div className="flex">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
