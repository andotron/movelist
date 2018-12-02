import Movielistitems from "./Movielistitem.js";
    var Movielist = (props) => (
      <div>
          <Movielistitems movie={props.movie[0]}/>
          <Movielistitems movie={props.movie[1]}/>
          <Movielistitems movie={props.movie[2]}/>
          <Movielistitems movie={props.movie[3]}/>
          <Movielistitems movie={props.movie[4]}/>
      </div>
    )
export default Movielist;