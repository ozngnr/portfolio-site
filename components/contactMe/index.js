import * as S from "./contactMe.styled";
import * as Yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ErrorMessage, Formik } from "formik";
import { AiOutlineSend } from "react-icons/ai";
import { SectionTitle, MobileSectionTitle } from "../../styles/common";
import OutlinedText from "../common/outlinedText";
import useSectionInView from "../../hooks/useSectionInView";
import useFadeIn from "../../hooks/useFadeIn";
import Banner from "../banner";
import { sendContactForm } from "../../lib/api";

const initialValues = { fullName: "", email: "", message: "", subject: "" };

const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2)
    .max(50)
    .required("Name is required")
    .label("Name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(2)
    .max(100)
    .required("Subject is required")
    .label("Subject"),
  message: Yup.string()
    .min(5)
    .max(200)
    .required("Message can't be empty")
    .label("Message"),
});

const ContactMe = () => {
  const ref = useRef();
  const { isInView } = useSectionInView(ref);
  const { fadeIn } = useFadeIn(0);

  return (
    <S.Section id="contact" ref={ref}>
      <SectionTitle as={OutlinedText} vertical={true} isInView={isInView}>
        contact me.
      </SectionTitle>
      <S.Container>
        <MobileSectionTitle>Contact Me.</MobileSectionTitle>
        <S.Body {...fadeIn}>
          <S.Text>Have a project in mind?</S.Text>
          <Banner title={"Let's talk."} />
        </S.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            sendContactForm(values);
            resetForm();
          }}
          validationSchema={contactSchema}
        >
          {({ isSubmitting, errors, touched, isValid }) => (
            <S.Form>
              <S.FieldGroup>
                <S.Row>
                  <S.InputWrapper>
                    <S.Field
                      name="fullName"
                      placeholder="name"
                      error={touched.fullName && errors.fullName}
                    />
                    <ErrorMessage name="fullName">
                      {(error) => (
                        <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
                      )}
                    </ErrorMessage>
                  </S.InputWrapper>
                  <S.InputWrapper>
                    <S.Field
                      name="email"
                      placeholder="email"
                      error={touched.email && errors.email}
                    />
                    <ErrorMessage name="email">
                      {(error) => (
                        <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
                      )}
                    </ErrorMessage>
                  </S.InputWrapper>
                  <S.InputWrapper>
                    <S.Field
                      name="subject"
                      placeholder="subject"
                      error={touched.subject && errors.subject}
                    />
                    <ErrorMessage name="subject">
                      {(error) => (
                        <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
                      )}
                    </ErrorMessage>
                  </S.InputWrapper>
                </S.Row>
                <S.InputWrapper>
                  <S.Field
                    style={{ resize: "none", display: "block" }}
                    component="textarea"
                    name="message"
                    placeholder="message"
                    error={touched.message && errors.message}
                    rows={8}
                  ></S.Field>
                  <ErrorMessage name="message">
                    {(error) => (
                      <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
                    )}
                  </ErrorMessage>
                </S.InputWrapper>
              </S.FieldGroup>

              <S.Button type="submit">
                <S.PaperPlane style={{ transform: "rotate(-30deg" }} />
              </S.Button>
            </S.Form>
          )}
        </Formik>
      </S.Container>
    </S.Section>
  );
};

export default ContactMe;
