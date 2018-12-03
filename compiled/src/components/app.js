import Movielist from "./MovieList.js";
import movies from "../data/MovieData.js";
import SearchBar from "./SearchBar.js";

var App = () => React.createElement(
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
    React.createElement(Movielist, { movie: movies })
  )
);

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVsaXN0IiwibW92aWVzIiwiU2VhcmNoQmFyIiwiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsc0JBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUEsSUFBSUMsTUFBTSxNQUNKO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLHdCQUFDLFNBQUQ7QUFBTCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssd0JBQUMsU0FBRCxJQUFXLE9BQU9GLE1BQWxCO0FBQUw7QUFGRixDQUROOztBQVFBLGVBQWVFLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllbGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3QuanNcIjtcbmltcG9ydCBtb3ZpZXMgZnJvbSBcIi4uL2RhdGEvTW92aWVEYXRhLmpzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci5qc1wiO1xuXG52YXIgQXBwID0gKCkgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj48U2VhcmNoQmFyLz48L2Rpdj5cbiAgICAgICAgPGRpdj48TW92aWVsaXN0IG1vdmllPXttb3ZpZXN9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=