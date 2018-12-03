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

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(SearchBar, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVsaXN0IiwibW92aWVzIiwiU2VhcmNoQmFyIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsc0JBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0VDLFlBQVFDLEdBQVIsQ0FBWVIsTUFBWixFQUFvQixnQkFBcEI7QUFDRixTQUFLUyxLQUFMLEdBQWE7QUFDWFQsY0FBT0E7QUFESSxLQUFiO0FBR0Q7O0FBRURVLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLDRCQUFDLFNBQUQ7QUFBTCxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssNEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXVCxNQUE3QjtBQUFMO0FBRkYsS0FERjtBQU1EO0FBaEIrQjs7QUFvQmxDLGVBQWVFLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllbGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3QuanNcIjtcbmltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvTW92aWVEYXRhLmpzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci5qc1wiO1xuXG4vLyB2YXIgQXBwID0gKCkgPT4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGRpdj48U2VhcmNoQmFyLz48L2Rpdj5cbi8vICAgICAgICAgPGRpdj48TW92aWVsaXN0IG1vdmllPXttb3ZpZXN9Lz48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gKVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgICAgY29uc29sZS5sb2cobW92aWVzLCBcInRoaXMgaXMgbW92aWVzXCIpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczptb3ZpZXNcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+PFNlYXJjaEJhci8+PC9kaXY+XG4gICAgICAgIDxkaXY+PE1vdmllbGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=