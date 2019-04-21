import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

import Container from '../Container/Container';
import Separator from '../Separator/Separator';
import Project from '../Project/Project';
import { mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulProjects {
      title
      projects {
        id
        title
        description {
          description
        }
        type
        technologies
        links {
          id
          text
          href
        }
        image {
          fluid(maxWidth: 700) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProjectsItem = styled.li`
  & + & {
    margin-top: 4rem;
  }

  @media (${mediaQueries.lgMin}) {
    & + & {
      margin-top: 8rem;
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={query}
    render={({ contentfulProjects }) => (
      <section id={slug(contentfulProjects.title)}>
        <Container>
          <Title>{contentfulProjects.title}</Title>
          <Separator />
          <ProjectsList>
            {contentfulProjects.projects.map((project, i) => (
              <ProjectsItem key={project.id}>
                <Project
                  title={project.title}
                  description={marked(project.description.description)}
                  type={project.type}
                  technologies={project.technologies}
                  links={project.links}
                  fluid={project.image.fluid}
                  isOdd={i % 2 !== 0}
                />
              </ProjectsItem>
            ))}
          </ProjectsList>
        </Container>
      </section>
    )}
  />
);

export default Projects;
