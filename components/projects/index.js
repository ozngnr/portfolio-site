import { useRef } from 'react';
import { useInView } from 'framer-motion';
import * as S from './projects.styled';
import StackIcon, { icons } from '../../assets/stackIcons';
import { FiExternalLink } from 'react-icons/fi';
import { SectionTitle } from '../../styles/common';
import OutlinedText from '../outlinedText';

const Projects = ({ data }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-40% 0% -40% 0%' });

  return (
    <S.Section id="projects" ref={ref}>
      <SectionTitle as={OutlinedText} vertical>
        projects.
      </SectionTitle>
      <S.Container>
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
                  {project.demo && (
                    <S.Link
                      href={project.demo}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      demo <FiExternalLink />
                    </S.Link>
                  )}
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
      </S.Container>
    </S.Section>
  );
};

export default Projects;
