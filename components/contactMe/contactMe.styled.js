import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";
import { BaseContainer } from "../../styles/global";
import { motion } from "framer-motion";
import { device } from "../../styles/breakpoints";
import { AiOutlineSend } from "react-icons/ai";

export const PaperPlane = styled(AiOutlineSend)`
  font-size: 1.5rem;
`;

export const Button = styled.button`
  display: flex;
  flex-grow: 1;
  flex-basis: 200px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  border: 1px solid ${({ theme }) => theme.textTransparent};
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.textSecondary};

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.accent};
  }

  &:active:enabled {
    border: 1px solid ${({ theme }) => theme.accent};
  }

  @media ${device.laptopL} {
    max-width: 300px;
  }
`;
export const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 0.8rem;
  position: absolute;
`;

export const Field = styled(FormikField)`
  width: 100%;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.error : theme.textTransparent)};
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.textSecondary};
  padding: 0.75em;
  font-family: var(--body-font);

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.textSecondary};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.bgLight} inset;
    transition: background-color 0.5s ease-in-out 0s;
    border: 1px solid ${({ theme }) => theme.textTransparent};
  }
  &::placeholder {
    color: ${({ theme }) => theme.textTransparent};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.accent};
    outline: none;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  flex-basis: 280px;
  flex-grow: 1;
`;

export const FieldGroup = styled.div`
  flex-grow: 1;
`;

export const Form = styled(FormikForm)`
  position: relative;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const Body = styled(motion.div)`
  text-align: center;
  margin-bottom: 4em;
`;

export const Subtitle = styled.h3`
  font-family: var(--title-font);

  &:first-of-type {
    font-size: 2rem;
  }
`;
export const SubmitMessage = styled.div`
  text-align: center;
  font-size: 1.25rem;
  margin-top: 1em;
  color: ${({ error, theme }) => (error ? theme.error : theme.accent)};
  font-weight: 100;

  @media ${device.laptop} {
    text-align: right;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

export const Container = styled(BaseContainer)`
  @media ${device.laptop} {
    padding: 1.5rem 8rem;
  }
`;

export const Section = styled.section`
  @media ${device.laptop} {
    padding: 6rem 0;
  }
`;
