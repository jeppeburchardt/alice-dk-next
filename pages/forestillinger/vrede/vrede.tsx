import * as React from "react";
import Performance from "../../../components/pages/performance";

const images = [
  require("../../../images/forestillinger/vrede/vrede01.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede02.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede03.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede04.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede05.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede06.jpg?size=560"),
  require("../../../images/forestillinger/vrede/vrede07.jpg?size=560")
];

const gallery = [
  require("../../../images/forestillinger/vrede/vrede01.jpg"),
  require("../../../images/forestillinger/vrede/vrede02.jpg"),
  require("../../../images/forestillinger/vrede/vrede03.jpg"),
  require("../../../images/forestillinger/vrede/vrede04.jpg"),
  require("../../../images/forestillinger/vrede/vrede05.jpg"),
  require("../../../images/forestillinger/vrede/vrede06.jpg"),
  require("../../../images/forestillinger/vrede/vrede07.jpg")
];

export default () => (
  <Performance
    images={images}
    gallery={gallery}
    markdown={require("./vrede.md").default}
  />
);
