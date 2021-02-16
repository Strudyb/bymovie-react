import { Link } from "react-router-dom";
import "./Header.css";

function Header({ searchMovie }) {
  // const searchInputHandler = (value) => {
  //   handleSearch(value);
  // };

  return (
    <div className="menubar">
      <div className="menubar-left">
        <Link className="logo" to="/">
          My Movie App
        </Link>
      </div>
      <div className="menubar-right">
        <ul className="menubar-ul">
          <li>
            <input
              onChange={(e) => searchMovie(e.target.value)}
              type="search"
              name=""
              id=""
              placeholder="Search Movies"
            />
          </li>
          <li className="menubar-user">
            <Link to="/profile">My Profile</Link>
            <Link to="/profile">
              <img src="https://www.placehold.it/40x40" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
