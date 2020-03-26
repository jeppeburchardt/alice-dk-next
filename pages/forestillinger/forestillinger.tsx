import * as React from "react";
import Navigation from "../../components/molecyles/navigation";
import Content from "../../components/atoms/content";
import Link from "next/link";
import {
  Cards,
  Card,
  CardTitle,
  CardImage
} from "../../components/atoms/cards";
import Footer from "../../components/atoms/footer";
import { Color } from "../../constants/colors";
import MarkDown from "react-markdown";

function Forestillinger() {
  return (
    <>
      <Navigation />
      <Content>
        <MarkDown source={require("./forestillinger.md").default} />
        <Cards>
          <Link href="/forestillinger/babette">
            <Card href="/forestillinger/babette">
              <CardImage
                src={require("../../images/forestillinger/babette/babette.jpg")}
              />
              <CardTitle color={Color.Forestillinger}>
                Babettes gæstebud
              </CardTitle>
            </Card>
          </Link>
          <Link href="/forestillinger/vrede">
            <Card href="/forestillinger/vrede">
              <CardImage
                src={require("../../images/forestillinger/vrede/vrede.jpg")}
              />
              <CardTitle color={Color.Forestillinger}>Vrede</CardTitle>
            </Card>
          </Link>
          <Link href="/forestillinger/nytaarsnat">
            <Card href="/forestillinger/nytaarsnat">
              <CardImage
                src={require("../../images/forestillinger/nytaarsnat/nytaarsnat.jpg")}
              />
              <CardTitle color={Color.Forestillinger}>En nytårsnat</CardTitle>
            </Card>
          </Link>
          <Link href="/forestillinger/livlaegens">
            <Card href="/forestillinger/livlaegens">
              <CardImage
                src={require("../../images/forestillinger/livlaegens/livlaegens.jpg")}
              />
              <CardTitle color={Color.Forestillinger}>
                Livlægens besøg
              </CardTitle>
            </Card>
          </Link>
          {/* <GalleryItem href="/forestillinger/insomnia">
            <GalleryItemImage
              src={require("../../images/forestillinger/insomnia/insomnia.jpg")}
            />
            <GalleryItemTitle color={Color.Forestillinger}>
              Insomnia
            </GalleryItemTitle>
          </GalleryItem> */}
        </Cards>
      </Content>
      <Footer />
    </>
  );
}

export default Forestillinger;
