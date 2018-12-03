var SearchBar = (props) => (
    <form>
        <input type="text" className="search" placeholder="Search more movies"></input>
        <input type="submit" className="submit-btn" value="Search" onClick={() => (props.checkCurrentList)}></input>
    </form>
)
export default SearchBar;