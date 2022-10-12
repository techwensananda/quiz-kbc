import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:id" element={<Quiz />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
