import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { BaseContainer } from '../../styles/global';
import { motion } from 'framer-motion';
import { device } from '../../styles/breakpoints';

export const Button = styled.button`
  display: grid;
  place-items: center;
  /* width: 50%; */
  padding: 1.5em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.textSecondary};

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.accent};
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5em;
`;
export const Field = styled(FormikField)`
  position: relative;
  flex-basis: 280px;
  flex-grow: 1;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  padding: 0.5em 0;
  margin-bottom: 1em;

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.textSecondary};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
    transition: background-color 1s ease-in-out 0s;
  }
  &::placeholder {
    color: ${({ theme }) => theme.textTransparent};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.accent};
    outline: none;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;
export const Form = styled(FormikForm)`
  position: relative;
  margin: auto;
`;
export const Body = styled(motion.div)`
  text-align: center;
  margin-bottom: 4em;
`;

export const Text = styled.h3`
  &:first-of-type {
    font-size: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 1em;
`;
export const Container = styled(BaseContainer)`
  @media ${device.laptop} {
    padding: 3rem 8rem;
  }
`;

export const Section = styled.section`
  @media ${device.laptop} {
    padding: 6rem 0;
  }
`;
