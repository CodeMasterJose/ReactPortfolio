import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";
import Blog from "./Pages/Blog";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p className="text-red-500">
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/project1" element={<Project1 />} />
          <Route path="/portfolio/project2" element={<Project2 />} />
          <Route path="/portfolio/project3" element={<Project3 />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
