import Logo from "./logo";
import styled from "styled-components";
import Link from "next/link";

const Image = require("../../images/bg.png");

const BackgroundImage = styled.div`
  background-color: #000;
  background-image: url("${Image}");
  background-size: cover;
  background-position: center 64%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 8px;
  @media only screen and (max-width : 425px) {
    background-position: center 64%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BackgroundImageFull = styled(BackgroundImage)`
  background-position: center;
  align-items: flex-start;
  height: 100vh;
  @media only screen and (max-width: 425px) {
    background-position: 80% center;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuList = styled.div`
  display: flex
  flex-direction: row;
  flex: 1 2 auto;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  @media only screen and (max-width : 425px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const MenuItem = styled.a`
  font-size: 16px;
  font-family: "Stardos Stencil", sans;
  text-decoration: none;
  text-transform: uppercase;
  background: #fff;
  color: #000;
  margin: 8px;
  padding: 8px 16px;
  transition: background-color 100ms linear;
  cursor: pointer;

  &:nth-of-type(1) {
    background-color: #f0ca5c;
  }
  &:nth-of-type(2) {
    background-color: #f04ba9;
  }
  &:nth-of-type(3) {
    background-color: #19abc0;
  }
  &:nth-of-type(4) {
    background-color: #9cb1b5;
  }
  &:hover {
    background-color: #fff;
  }
`;

interface NavigationProps {
  fullscreen?: boolean;
}

export default function Navigation(props: NavigationProps) {
  const Background = props.fullscreen ? BackgroundImageFull : BackgroundImage;
  return (
    <nav role="navigation">
      <Background>
        <Logo />
        <MenuList>
          <Link href="/forestillinger">
            <MenuItem>Forestillinger</MenuItem>
          </Link>
          <Link href="/rekvisitter">
            <MenuItem>Rekvisitter</MenuItem>
          </Link>
          <Link href="/kontakt">
            <MenuItem>Kontakt</MenuItem>
          </Link>
          <Link href="/cv">
            <MenuItem>CV</MenuItem>
          </Link>
        </MenuList>
      </Background>
    </nav>
  );
}
