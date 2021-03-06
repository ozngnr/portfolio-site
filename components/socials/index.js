import { Container, ExternalLink, EmailLink } from "./socials.styled"
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa"

const Socials = () => {
  return (
    <Container>
      <ExternalLink
        href="https://www.linkedin.com/in/ozanguner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </ExternalLink>

      <ExternalLink
        href="https://www.github.com/ozngnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </ExternalLink>

      <ExternalLink
        href="https://www.codepen.io/ozngnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen />
      </ExternalLink>

      <EmailLink href="mailto:ozngnr@gmail.com">
        hello@ozanguner.co.uk
      </EmailLink>
    </Container>
  )
}

export default Socials
