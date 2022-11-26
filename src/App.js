import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
