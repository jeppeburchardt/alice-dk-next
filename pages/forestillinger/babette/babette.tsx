import * as React from "react";
import Performance from "../../../components/pages/performance";

const images = [
  require("../../../images/forestillinger/babette/babette01.jpg?size=560"),
  require("../../../images/forestillinger/babette/babette02.jpg?size=560"),
  require("../../../images/forestillinger/babette/babette03.jpg?size=560"),
  require("../../../images/forestillinger/babette/babette04.jpg?size=560")
];

const gallery = [
  require("../../../images/forestillinger/babette/babette01.jpg"),
  require("../../../images/forestillinger/babette/babette02.jpg"),
  require("../../../images/forestillinger/babette/babette03.jpg"),
  require("../../../images/forestillinger/babette/babette04.jpg")
];

export default () => (
  <Performance
    images={images}
    gallery={gallery}
    markdown={require("./babette.md").default}
  />
);
