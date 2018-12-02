import Movielist from "./MovieList.js";
import movies from "../data/MovieData.js";

var App = () => (
      <div>
        <Movielist movie={movies}/>
      </div>
 
)


export default App;