import "./styles.css";
 import { UserList } from "./pages/UserList";
 import { ColorGame } from "./pages/ColorGame";
import { MovieList } from "./pages/MovieList";
import { Routes, Route, Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGamepad, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { Home } from "./pages/Home";

export default function App() {
  return <div className="App">
    <Link to="/users"><FontAwesomeIcon icon={faUser} /></Link>|
    <Link to="/movielist"><FontAwesomeIcon icon={faList} /></Link>|
    <Link to="/colorgame"><FontAwesomeIcon icon={faGamepad} /></Link>|
    <Link to=""><FontAwesomeIcon icon={faHouse} /></Link>
      <Routes>
        <Route path="movielist" element={<MovieList />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="" element={<Home />} />
      </Routes>

    </div>;

}
