import * as React from "react";
import Performance from "../../../components/pages/performance";

const images = [
  require("../../../images/forestillinger/livlaegens/livlaegens01.jpg?size=560"),
  require("../../../images/forestillinger/livlaegens/livlaegens02.jpg?size=560")
];

const gallery = [
  require("../../../images/forestillinger/livlaegens/livlaegens01.jpg"),
  require("../../../images/forestillinger/livlaegens/livlaegens02.jpg")
];

export default () => (
  <Performance
    images={images}
    gallery={gallery}
    markdown={require("./livlaegens.md").default}
  />
);
