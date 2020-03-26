import * as React from "react";
import Performance from "../../../components/pages/performance";
import Content from "../../../components/atoms/content";
import Footer from "../../../components/atoms/footer";
import MarkDown from "react-markdown";

const images = [
  require("../../../images/forestillinger/insomnia/insomnia01.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia02.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia03.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia04.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia04.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia05.png?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia06.jpg?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia07.jpg?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia08.jpg?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia09.jpg?size=560"),
  require("../../../images/forestillinger/insomnia/insomnia10.jpg?size=560")
];

const gallery = [
  require("../../../images/forestillinger/insomnia/insomnia01.png"),
  require("../../../images/forestillinger/insomnia/insomnia02.png"),
  require("../../../images/forestillinger/insomnia/insomnia03.png"),
  require("../../../images/forestillinger/insomnia/insomnia04.png"),
  require("../../../images/forestillinger/insomnia/insomnia04.png"),
  require("../../../images/forestillinger/insomnia/insomnia05.png"),
  require("../../../images/forestillinger/insomnia/insomnia06.jpg"),
  require("../../../images/forestillinger/insomnia/insomnia07.jpg"),
  require("../../../images/forestillinger/insomnia/insomnia08.jpg"),
  require("../../../images/forestillinger/insomnia/insomnia09.jpg"),
  require("../../../images/forestillinger/insomnia/insomnia10.jpg")
];

export default () => (
  <Performance
    images={images}
    gallery={gallery}
    markdown={require("./insomnia.md").default}
  />
);
