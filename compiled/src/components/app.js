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
      movies: movies
    };
  }

  checkCurrentList() {
    //change the current states movies based on a user search
    //grab data from search bar and then filter titles
    //reupdate the state
    let $uI = $(".submit-btn").val;
    let filteredMovies = this.state.movies;
    filteredMovies = filteredMovies.filter(movie => movie.title === $uI);

    this.setState({
      movies: filteredMovies
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(SearchBar, { checkCurrentList: this.checkCurrentList.bind(this) })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(Movielist, { movie: this.state.movies })
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVsaXN0IiwibW92aWVzIiwiU2VhcmNoQmFyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiY2hlY2tDdXJyZW50TGlzdCIsIiR1SSIsIiQiLCJ2YWwiLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixzQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRUMsWUFBUUMsR0FBUixDQUFZUixNQUFaLEVBQW9CLGdCQUFwQjtBQUNGLFNBQUtTLEtBQUwsR0FBYTtBQUNYVCxjQUFPQTtBQURJLEtBQWI7QUFHRDs7QUFFRFUscUJBQW9CO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLE1BQU1DLEVBQUUsYUFBRixFQUFpQkMsR0FBM0I7QUFDQSxRQUFJQyxpQkFBaUIsS0FBS0wsS0FBTCxDQUFXVCxNQUFoQztBQUNBYyxxQkFBaUJBLGVBQWVDLE1BQWYsQ0FBdUJDLEtBQUQsSUFBV0EsTUFBTUMsS0FBTixLQUFnQk4sR0FBakQsQ0FBakI7O0FBRUEsU0FBS08sUUFBTCxDQUFjO0FBQ1hsQixjQUFPYztBQURJLEtBQWQ7QUFHRjs7QUFFREssV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUssNEJBQUMsU0FBRCxJQUFXLGtCQUFrQixLQUFLVCxnQkFBTCxDQUFzQlUsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBN0I7QUFBTCxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssNEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS1gsS0FBTCxDQUFXVCxNQUE3QjtBQUFMO0FBRkYsS0FERjtBQU1EO0FBN0IrQjs7QUFpQ2xDLGVBQWVFLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllbGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3QuanNcIjtcbmltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvTW92aWVEYXRhLmpzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci5qc1wiO1xuXG4vLyB2YXIgQXBwID0gKCkgPT4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGRpdj48U2VhcmNoQmFyLz48L2Rpdj5cbi8vICAgICAgICAgPGRpdj48TW92aWVsaXN0IG1vdmllPXttb3ZpZXN9Lz48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gKVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgICAgY29uc29sZS5sb2cobW92aWVzLCBcInRoaXMgaXMgbW92aWVzXCIpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6bW92aWVzXG4gICAgfVxuICB9XG5cbiAgY2hlY2tDdXJyZW50TGlzdCAoKSB7XG4gICAgIC8vY2hhbmdlIHRoZSBjdXJyZW50IHN0YXRlcyBtb3ZpZXMgYmFzZWQgb24gYSB1c2VyIHNlYXJjaFxuICAgICAvL2dyYWIgZGF0YSBmcm9tIHNlYXJjaCBiYXIgYW5kIHRoZW4gZmlsdGVyIHRpdGxlc1xuICAgICAvL3JldXBkYXRlIHRoZSBzdGF0ZVxuICAgICBsZXQgJHVJID0gJChcIi5zdWJtaXQtYnRuXCIpLnZhbDtcbiAgICAgbGV0IGZpbHRlcmVkTW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXM7XG4gICAgIGZpbHRlcmVkTW92aWVzID0gZmlsdGVyZWRNb3ZpZXMuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUudGl0bGUgPT09ICR1SSlcbiAgICAgXG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6ZmlsdGVyZWRNb3ZpZXNcbiAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj48U2VhcmNoQmFyIGNoZWNrQ3VycmVudExpc3Q9e3RoaXMuY2hlY2tDdXJyZW50TGlzdC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgIDxkaXY+PE1vdmllbGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=