import * as React from "react";
import styled from "styled-components";
import { Color } from "../../constants/colors";

export const CardTitle = styled.div<{ color: Color }>`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 12px;
  padding: 4px 8px;
  font-family: "Stardos Stencil", sans;
  text-transform: uppercase;
  font-size: 18px;
  background-color: ${props => props.color};
`;

export const Card = styled.a`
  display: block;
  position: relative;
  margin: 0 10px 20px 10px;
  flex: 1 2 200px;
  background-color: hotpink;
  height: 200px;
  overflow: hidden;
  cursor: pointer;

  &:link,
  &:visited,
  &:hover {
    color: #000;
  }
  &:hover > ${CardTitle} {
    background-color: #fff !important;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const Cards = styled.div`
  margin: 0 -20px;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
`;
