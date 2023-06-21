import { useRef } from "react";
import * as S from "./projects.styled";
import { SectionTitle, MobileSectionTitle } from "../../styles/common";
import OutlinedText from "../common/outlinedText";
import useSectionInView from "../../hooks/useSectionInView";
import useFadeIn from "../../hooks/useFadeIn";
import Project from "./Project";
import FeaturedProject from "./FeaturedProject";

const Projects = ({ data }) => {
  const ref = useRef();
  const { isInView } = useSectionInView(ref);
  const { fadeIn } = useFadeIn(0);

  return (
    <S.Section id="projects" ref={ref}>
      <SectionTitle as={OutlinedText} vertical="true" isInView={isInView}>
        projects.
      </SectionTitle>
      <S.Container>
        <MobileSectionTitle>projects.</MobileSectionTitle>
        <S.Projects>
          {data.map((project) =>
            project.isFeatured ? (
              <FeaturedProject
                key={project.projectNumber}
                project={project}
                {...fadeIn}
              />
            ) : (
              <Project
                key={project.projectNumber}
                project={project}
                {...fadeIn}
              />
            )
          )}
        </S.Projects>
      </S.Container>
    </S.Section>
  );
};

export default Projects;
