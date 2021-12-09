import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";

//import global style
import "./styles/globalStyles.scss";
import Contectme from "./components/contectme";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
        </Routes>

        {/* <Routes>
          <Route path="/" component={<HomePage />}></Route>
          <Route path="/AboutMe" component={<AboutMe />}></Route>
        </Routes>*/}
        <Contectme />
      </div>
    </Router>
  );
}

export default App;
