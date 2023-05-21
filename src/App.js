import "./App.css";
import Homescreen from "./components/Homescreen/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginscreen from "./components/Loginscreen/Loginscreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {user ? (
          <Loginscreen />
        ) : (
          <Routes>
            {/* <Route path="/" element={<Loginscreen />}></Route> */}
            <Route path="/" element={<Homescreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
