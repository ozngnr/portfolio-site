import { Container, ExternalLink } from "./socials.styled";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <Container>
      <ExternalLink
        href="https://www.linkedin.com/in/ozanguner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin fontSize={35} />
      </ExternalLink>

      <ExternalLink
        href="https://www.github.com/ozngnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub fontSize={35} />
      </ExternalLink>

      {/* <ExternalLink
        href="https://www.codepen.io/ozngnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen />
      </ExternalLink> */}
    </Container>
  );
};

export default Socials;
