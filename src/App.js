import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element= {<Landing />} />
          <Route path="/movies" element= {<Movies />} />
          <Route path="/movies/:imdbID" element= {<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
