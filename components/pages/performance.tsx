import * as React from "react";
import styled from "styled-components";
import Navigation from "../molecyles/navigation";
import Content from "../atoms/content";
import Footer from "../atoms/footer";
import MarkDown from "react-markdown";
import Lightbox from "react-image-lightbox";

interface PerformanceProps {
  images: string[];
  gallery: string[];
  markdown: string;
}

const ContentImage = styled.img.attrs({
  role: "presentation"
})`
  cursor: pointer;
`;

function Performance({ markdown, images, gallery }: PerformanceProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Navigation />
      <Content>
        <MarkDown source={markdown} />
        {images.map((src, i) => (
          <ContentImage
            src={src}
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </Content>
      <Footer />
      {isOpen && (
        <Lightbox
          mainSrc={gallery[index]}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={gallery[(index + 1) % gallery.length]}
          prevSrc={gallery[(index + gallery.length - 1) % gallery.length]}
          onMovePrevRequest={() =>
            setIndex((index + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % gallery.length)}
        />
      )}
    </>
  );
}

export default Performance;
