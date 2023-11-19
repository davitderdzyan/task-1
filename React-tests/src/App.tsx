import Experts from "./Experts/Experts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Experts>{"AI Experts"}</Experts>} />
        <Route path="/Blog" element={<Experts>{"Blog"}</Experts>} />
      </Routes>
    </>
  );
}

export default App;
