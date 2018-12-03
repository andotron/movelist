import Movielist from "./MovieList.js";
import movies from "../data/MovieData.js";
import SearchBar from "./SearchBar.js";

var App = () => (
      <div>
        <div><SearchBar/></div>
        <div><Movielist movie={movies}/></div>
      </div>
)


export default App;