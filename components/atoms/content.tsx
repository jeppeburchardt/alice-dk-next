import styled from "styled-components";

export default styled.div.attrs({ role: "main" })`
  min-height: 100vh;
  max-width: 620px;
  margin: auto;
  padding: 60px 30px;
  font-family: "Times New Roman", Times, serif;
  color: #2a2a2a;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Stardos Stencil", sans;
    font-weight: normal;
    line-height: 1;
    text-transform: uppercase;
    margin: 1em 0;
  }
  h1:first-child {
    margin-top: 0;
  }
  h1 {
    font-size: 48px;
  }

  h2 {
    margin: 40px 0;
  }

  h3 {
    margin: 40px 0 10px 0;
  }

  p {
    line-height: 1.5;
    margin: 10px 0;
  }

  a:not([class]) {
    &:link,
    &:visited {
      color: #19abc0;
    }
    &:hover {
      color: #4bbfd1;
    }
  }

  img {
    width: 100%;
  }
`;
