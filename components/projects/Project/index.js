import * as S from "./project.styled";
import { FiExternalLink } from "react-icons/fi";
import StackIcon from "../../../assets/stackIcons";

const Project = ({ project, ...restProps }) => {
  return (
    <S.Project key={project.id} {...restProps}>
      <S.ProjectTitle>
        <span>0{project.projectNumber}</span>
        {project.title}
      </S.ProjectTitle>
      <S.Description
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></S.Description>
      <S.Footer>
        <S.Links>
          <S.Link href={project.code} rel="noopener noreferrer" target="_blank">
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
  );
};

export default Project;
