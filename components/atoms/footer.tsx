import styled from "styled-components";

const Footer = styled.footer`
  background-color: #eee
  padding: 60px 20px 60px 20px;
  text-align: center;
  color: #666;
  font-family: "Stardos Stencil",sans;
  text-transform: uppercase;
`;

export default () => (
  <Footer>Copyright {new Date().getFullYear()} Alice Sjurkalina</Footer>
);
