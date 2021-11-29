import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.componnent";
const Hatpage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop/hats" element={<Hatpage />} />
      </Routes>
    </div>
  );
}

export default App;
