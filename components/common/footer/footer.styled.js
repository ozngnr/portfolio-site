import styled from "styled-components"

export const Footer = styled.footer`
  text-align: center;
  font-weight: 200;
  font-size: 12px;
  color: ${({ theme }) => theme.textTransparent};
  padding: 2em;
  filter: blur(${({ navOpen }) => (navOpen ? "8px" : 0)});
`
