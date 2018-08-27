import { cube } from "./math";
import "./styles/style.css";

function component () {
  const element = document.createElement("pre");

  element.innerHTML = [
    "hello webpack!",
    `5 cubed is equal to ${cube(5)}`
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());
