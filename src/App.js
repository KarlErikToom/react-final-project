import Landing from "./assets/Landing";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> /
          <Route path="/" element= {<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
