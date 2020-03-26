import * as React from "react";
import Performance from "../../../components/pages/performance";

const images = [
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat01.jpg?size=560"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat02.jpg?size=560"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat03.jpg?size=560"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat04.jpg?size=560")
];

const gallery = [
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat01.jpg"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat02.jpg"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat03.jpg"),
  require("../../../images/forestillinger/nytaarsnat/nytaarsnat04.jpg")
];

export default () => (
  <Performance
    images={images}
    gallery={gallery}
    markdown={require("./nytaarsnat.md").default}
  />
);
