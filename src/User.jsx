import { Msg } from "./Msg";
import { Im } from "./Im";
import { Counter } from "./Counter";

//can also set default value here
// function User({ name = "Unknown", image }) {
export function User({ name, image }) {
  return (
    <div>
      <Im image={image} />
      <Msg name={name} />
      {/* <Counter /> */}
    </div>
  );
}
