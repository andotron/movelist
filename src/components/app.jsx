import Movielist from "./MovieList.js";
import movies from "../data/MovieData.js";
import SearchBar from "./SearchBar.js";

// var App = () => (
//       <div>
//         <div><SearchBar/></div>
//         <div><Movielist movie={movies}/></div>
//       </div>
// )


class App extends React.Component {
  constructor(props) {
    super(props);
      console.log(movies, "this is movies")
    this.state = {
      movies:movies
    }
  }

  render() {
    return (
      <div>
        <div><SearchBar/></div>
        <div><Movielist movie={this.state.movies}/></div>
      </div>
    )
  }
}


export default App;