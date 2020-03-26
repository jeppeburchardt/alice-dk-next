import * as React from "react";
import Navigation from "../../components/molecyles/navigation";
import Content from "../../components/atoms/content";
import {
  Cards,
  Card,
  CardTitle,
  CardImage
} from "../../components/atoms/cards";
import Footer from "../../components/atoms/footer";
import { Color } from "../../constants/colors";
import MarkDown from "react-markdown";
import Lightbox from "react-image-lightbox";

const hatImages = [
  require("../../images/rekvisitter/hat/hat01.jpg"),
  require("../../images/rekvisitter/hat/hat02.jpg"),
  require("../../images/rekvisitter/hat/hat03.jpg"),
  require("../../images/rekvisitter/hat/hat04.jpg"),
  require("../../images/rekvisitter/hat/hat05.jpg"),
  require("../../images/rekvisitter/hat/hat06.jpg"),
  require("../../images/rekvisitter/hat/hat07.jpg"),
  require("../../images/rekvisitter/hat/hat08.jpg"),
  require("../../images/rekvisitter/hat/hat09.jpg"),
  require("../../images/rekvisitter/hat/hat10.jpg"),
  require("../../images/rekvisitter/hat/hat11.jpg"),
  require("../../images/rekvisitter/hat/hat12.jpg"),
  require("../../images/rekvisitter/hat/hat13.jpg")
];

const latexImages = [
  require("../../images/rekvisitter/latex/latex01.jpg"),
  require("../../images/rekvisitter/latex/latex02.jpg"),
  require("../../images/rekvisitter/latex/latex03.jpg"),
  require("../../images/rekvisitter/latex/latex04.jpg"),
  require("../../images/rekvisitter/latex/latex05.jpg"),
  require("../../images/rekvisitter/latex/latex06.jpg"),
  require("../../images/rekvisitter/latex/latex07.jpg")
];

const grisImages = [
  require("../../images/rekvisitter/gris/gris01.jpg"),
  require("../../images/rekvisitter/gris/gris02.jpg"),
  require("../../images/rekvisitter/gris/gris03.jpg"),
  require("../../images/rekvisitter/gris/gris04.jpg"),
  require("../../images/rekvisitter/gris/gris05.jpg")
];

const gummiglasImages = [
  require("../../images/rekvisitter/gummiglas/gummiglas01.jpg"),
  require("../../images/rekvisitter/gummiglas/gummiglas02.jpg"),
  require("../../images/rekvisitter/gummiglas/gummiglas03.jpg"),
  require("../../images/rekvisitter/gummiglas/gummiglas04.jpg"),
  require("../../images/rekvisitter/gummiglas/gummiglas05.jpg")
];

function Rekvisitter() {
  const [images, setImages] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  function showLightBox(images) {
    setImages(images);
    setIsOpen(true);
    setIndex(0);
  }

  return (
    <>
      <Navigation />
      <Content>
        <MarkDown source={require("./rekvisitter.md").default} />
        <Cards>
          <Card role="button" onClick={() => showLightBox(hatImages)}>
            <CardImage src={require("../../images/rekvisitter/hat/hat.jpg")} />
            <CardTitle color={Color.Rekvisitter}>Hovedbeklædning</CardTitle>
          </Card>
          <Card role="button" onClick={() => showLightBox(latexImages)}>
            <CardImage
              src={require("../../images/rekvisitter/latex/latex.jpg")}
            />
            <CardTitle color={Color.Rekvisitter}>Latex Maske</CardTitle>
          </Card>
          <Card role="button" onClick={() => showLightBox(grisImages)}>
            <CardImage
              src={require("../../images/rekvisitter/gris/gris.jpg")}
            />
            <CardTitle color={Color.Rekvisitter}>Gris</CardTitle>
          </Card>
          <Card role="button" onClick={() => showLightBox(gummiglasImages)}>
            <CardImage
              src={require("../../images/rekvisitter/gummiglas/gummiglas.jpg")}
            />
            <CardTitle color={Color.Rekvisitter}>Gummi Glas</CardTitle>
          </Card>
        </Cards>
      </Content>
      <Footer />
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % images.length)}
        />
      )}
    </>
  );
}

export default Rekvisitter;
