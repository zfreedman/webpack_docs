import _ from "lodash";

import Icon from "./images/cat.jpeg";
import data from "./data/data.xml";
import "./styles/style.css";

function component () {
  const element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack"], " | ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(data);

  return element;
}

document.body.appendChild(component());
