import "./styles.css";
 import { UserList } from "./UserList";
 import { ColorGame } from "./ColorGame";
import { MovieList } from "./MovieList";
import { Routes, Route, Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGamepad, faList, faUser } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return <div className="App">
    <Link to="/users"><FontAwesomeIcon icon={faUser} />|</Link>  <Link to="/movielist"><FontAwesomeIcon icon={faList} /></Link> | <Link to="/colorgame"><FontAwesomeIcon icon={faGamepad} /></Link> | <Link to=""><FontAwesomeIcon icon={faHouse} /></Link>
      <Routes>
        <Route path="movielist" element={<MovieList />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="" element={<Home />} />
      </Routes>

    </div>;

}

function Home() {
  return <h1> Welcome to Movie App </h1>;
}
