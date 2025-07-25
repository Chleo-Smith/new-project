import { useState } from "react";
// import { UserList } from "./UserList";
// import { ColorGame } from "./ColorGame";
import { Counter } from "./Counter";

export function Movie({ name, poster, summary, rating, trailer, id }) {
  const ratingStyles = {
    color: rating > 8.5 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // }
  return (
    <div class="movie-container">
      <img src={poster} alt={name} class="movie-poster" />
      <div className="movie-content-container">
        <div class="movie-specs">
          <h2 class="movie-name">{name}</h2>
          <p style={ratingStyles} class="movie-rating">
            ⭐{rating}
          </p>
        </div>
        <button
          onClick={() => setShow(!show)}
          className="buttons"
          aria-label="toggle discription button"
        >
          Toggle Description
        </button>
        {/* conditional rendering  */}
        {show ? <p /*style = {summaryStyles}*/ class="movie-summary">{summary}</p> : ""}
      </div>

      <Counter />
    </div>
  );
}
