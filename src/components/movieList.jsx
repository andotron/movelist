import Movielistitems from "./Movielistitem.js";
import MovieListItem from "./Movielistitem.js";
var Movielist = (props) => (
    <div>
        {props.movie.map((movie)=> (
            <MovieListItem movie={movie} />
        ))}
    </div>
  )
export default Movielist;