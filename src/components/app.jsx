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
      console.log(movies, "this is movies");
    this.state = {
      movies:movies
    }
  }

  checkCurrentList () {
     //change the current states movies based on a user search
     //grab data from search bar and then filter titles
     //reupdate the state
     let $uI = $(".submit-btn").val;
     let filteredMovies = this.state.movies;
     filteredMovies = filteredMovies.filter((movie) => movie.title === $uI)
     
     this.setState({
        movies:filteredMovies
     })
  }

  render() {
    return (
      <div>
        <div><SearchBar checkCurrentList={this.checkCurrentList.bind(this)}/></div>
        <div><Movielist movie={this.state.movies}/></div>
      </div>
    )
  }
}


export default App;