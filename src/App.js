import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/movies" element= {<Movies />} />
          <Route path="/movies/:imdbID" element= {<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
