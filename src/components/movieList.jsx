import Movielistitems from "./Movielistitem.js";

var Movielist = (props) => (
      <ul>
          <Movielistitems movie={props.movie[0]}/>
          <Movielistitems movie={props.movie[1]}/>
          <Movielistitems movie={props.movie[2]}/>
          <Movielistitems movie={props.movie[3]}/>
          <Movielistitems movie={props.movie[4]}/>
      </ul>
)

export default Movielist;