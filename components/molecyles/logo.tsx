import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  line-height: 1.1;
  background: #000;
  margin: 8px;
  padding: 8px 16px;
  font-size: 33px;
  font-family: "Stardos Stencil", sans;
  font-weight: normal;

  > a {
    text-decoration: none;
    color: #fff;
    > *:first-child {
      display: block;
      font-size: 72px;
    }
  }
  @media only screen and (max-width: 425px) {
    font-size: 16px;
    padding: 4px 8px;
    > *:first-child {
      font-size: 36px;
    }
  }
`;

export default () => (
  <Header>
    <Link href="/">
      <a>
        <span>Alice</span>
        <span>Sjurkalina</span>
      </a>
    </Link>
  </Header>
);
