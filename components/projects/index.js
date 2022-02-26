import * as S from "./projects.styled"
import StackIcon, { icons } from "../../assets/stackIcons"
import { FiExternalLink } from "react-icons/fi"
import { useSectionInView } from "../../hooks/useSectionInView"

const Projects = ({ data }) => {
  const [sectionREf] = useSectionInView()

  return (
    <S.Section id="projects" name="projects." ref={sectionREf}>
      <S.SectionTitle>projects.</S.SectionTitle>
      <S.Projects>
        {data.map((project) => (
          <S.Project key={project.id}>
            <S.ProjectTitle>
              <span>{project.projectNumber}</span>
              {project.title}
            </S.ProjectTitle>
            <S.Description
              dangerouslySetInnerHTML={{ __html: project.content }}
            ></S.Description>
            <S.Footer>
              <S.Links>
                <S.Link
                  href={project.code}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  code <FiExternalLink />
                </S.Link>
                <S.Link
                  href={project.demo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  demo <FiExternalLink />
                </S.Link>
              </S.Links>
              <S.Stack>
                {project.stack.map((lang, i) => (
                  <StackIcon name={lang} key={i} />
                ))}
              </S.Stack>
            </S.Footer>
          </S.Project>
        ))}
      </S.Projects>
    </S.Section>
  )
}

export default Projects
