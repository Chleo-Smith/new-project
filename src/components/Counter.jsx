import { useState } from "react";

//event lsisterner listen for user events - browser gives onclick
export function Counter() {
  //react desnt listen to this var
  //let like = 0;
  //react listens to hook variables
  //all hooks are functions and all start with use keyqord
  //this is destructuring
  const [like, setLike] = useState(0); //returns array
  const [dislike, setDislike] = useState(0);

  //setlike updates the like
  return (
    <div className="buttons">
      {/* // this function called callback function
            () => console.log("click")
            function called when user clicks on button ->onclick -> callbackfn
            */}
      <div>
        <button aria-label="like button" onClick={() => setLike(like + 1)}>
          👍{like}
        </button>
      </div>

      <div>
        <button
          aria-label="dislike button"
          onClick={() => setDislike(dislike + 1)}
        >
          👎{dislike}
        </button>
      </div>
    </div>
  );
}
