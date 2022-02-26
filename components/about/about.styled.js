import styled from "styled-components"

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`

export const Text = styled.p`
  margin: 1em 0;
  line-height: 1.6;
  font-weight: 300;
  color: ${({ theme }) => theme.textSecondary};
`
export const TopText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  max-width: 550px;
`
export const Body = styled.div`
  max-width: 600px;
  align-self: flex-end;
`
export const SectionTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0.5em;
  margin-bottom: 1.5em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.accent};
  }

  @media (min-width: 900px) {
    display: none;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    padding: 2em 100px;
  }
`

export const Section = styled.section`
  width: 90%;
  margin: auto;
  padding-top: 5em;
`
