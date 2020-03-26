import * as React from "react";
import styled from "styled-components";
import Navigation from "../../components/molecyles/navigation";
import Content from "../../components/atoms/content";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/atoms/footer";

const Image = styled.img`
  float: right;
  margin-bottom: 30px;
  @media only screen and (min-width: 426px) {
    width: 30% !important;
  }
`;

function Kontakt() {
  console.log();
  return (
    <>
      <Navigation />
      <Content>
        <Image src={require("../../images/alice.jpg?size=300")} />
        <ReactMarkdown source={require("./kontakt.md").default} />
      </Content>
      <Footer />
    </>
  );
}

export default Kontakt;
