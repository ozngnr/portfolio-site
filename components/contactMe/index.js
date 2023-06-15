import * as S from "./contactMe.styled";
import { useRef, useState } from "react";
import { ErrorMessage, Formik } from "formik";
import { SectionTitle, MobileSectionTitle } from "../../styles/common";
import OutlinedText from "../common/outlinedText";
import useSectionInView from "../../hooks/useSectionInView";
import useFadeIn from "../../hooks/useFadeIn";
import Banner from "../banner";
import { sendContactForm } from "../../lib/api";
import { contactSchema } from "../../utils/validationSchemas";

const initialValues = { fullName: "", email: "", message: "", subject: "" };

const ContactMe = () => {
  const ref = useRef();
  const { isInView } = useSectionInView(ref);
  const { fadeIn } = useFadeIn(0);
  const [showMessage, setShowMessage] = useState(false);

  const showSubmitMessage = (delay) => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, delay * 1000);
  };

  return (
    <S.Section id="contact" ref={ref}>
      <SectionTitle as={OutlinedText} vertical={true} isInView={isInView}>
        contact me.
      </SectionTitle>
      <S.Container>
        <MobileSectionTitle>Contact Me.</MobileSectionTitle>
        <S.Body {...fadeIn}>
          <S.Subtitle>Have a project in mind?</S.Subtitle>
          <Banner title={"Let's talk."} />
        </S.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            sendContactForm(values);
            showSubmitMessage(8);
            resetForm();
          }}
          validationSchema={contactSchema}
        >
          {({ errors, touched }) => (
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
        {showMessage && (
          <S.SubmitMessage>
            Message sent. Thanks for reaching out!
          </S.SubmitMessage>
        )}
      </S.Container>
    </S.Section>
  );
};

export default ContactMe;
