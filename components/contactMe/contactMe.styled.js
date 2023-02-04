import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Button = styled.button``;
export const Label = styled.label``;
export const Field = styled(FormikField)``;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 5em;

  @media (min-width: 900px) {
    padding: 2em 100px;
  }
`;
export const Section = styled.section``;
