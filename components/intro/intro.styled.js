import styled, { keyframes } from 'styled-components';

export const SectionLink = styled.a`
  display: inline-block;
  padding: 1em 1.5em;
  color: white;
  border: 1px solid white;
  border-radius: 0.5em;
  margin-bottom: 2em;
`;
export const Text = styled.p`
  font-weight: 200;
  font-size: 1.125rem;
  margin: 2em 0 4em;
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  max-width: 400px;
`;

export const Body = styled.div`
  text-align: center;
  padding: 0 1em;
  z-index: 1;

  @media (min-width: 900px) {
    margin-right: 3em;
    text-align: left;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    transparent 50%,
    ${({ theme }) => theme.background} 100%
  );
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  min-height: 350px;
  margin-bottom: -130px;
  border-radius: 20px;
  mix-blend-mode: lighten;
  overflow: hidden;

  @media (min-width: 600px) {
    order: 2;
    margin-bottom: 0;
    max-width: 500px;
    min-height: 500px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

  @media (min-width: 600px) {
    margin: 4em auto;
    flex-direction: row;
    justify-content: center;
  }
`;
export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;
