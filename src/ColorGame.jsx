import { useState } from "react";

//onchange event listener
export function ColorGame() {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(["pink", "orange", "purple"]);

  const styles = {
    background: color,
    border: 0,
  };

  const addColor = (event) => {
    event.preventDefault();
    setColors([...colors, color]);
  };

  return (
    <div>
      <form onSubmit={addColor} className="color-form-container">
        <input
          onChange={(event) => setColor(event.target.value)}
          type="text"
          placeholder="Your Fave Color.."
          style={styles}
        />

        {/* dont need interpolation for these because variable stored line 14-15 */}
        <button type="submit">Add</button>
      </form>

      <div className="color-box-list-container">
        {colors.map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
    </div>
    // </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "50px",
    width: "250px",
  };

  return <div style={styles}></div>;
}
