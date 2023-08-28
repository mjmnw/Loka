import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/index";
import SignUp from "./pages/signUpPage/index";
import Hotel from "./pages/hotelPage/index";
import Booking from "./pages/bookingPage/index";
import NotFound from "./pages/notFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<homePage />} />
          <Route path="/signup" element={<singUpPage />} />
          <Route path="/hotel" element={<hotelPage />} />
          <Route path="/booking" element={<bookingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
