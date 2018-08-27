import { cube } from "./math";
import "./styles/style.css";

if (process.env.NODE_ENV !== "production")
  console.log("looks like i'm in dev mode");

function component () {
  const element = document.createElement("pre");

  element.innerHTML = [
    "hello webpack!",
    `5 cubed is equal to ${cube(5)}`
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());
