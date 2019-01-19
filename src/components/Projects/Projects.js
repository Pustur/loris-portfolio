import React from 'react';
import marked from 'marked';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

import Project from '../Project/Project';

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
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={query}
    render={({ contentfulProjects }) => (
      <section id={slug(contentfulProjects.title)}>
        <h2>{contentfulProjects.title}</h2>
        <ul>
          {contentfulProjects.projects.map(project => (
            <li key={project.id}>
              <Project
                title={project.title}
                description={marked(project.description.description)}
                type={project.type}
                technologies={project.technologies}
                links={project.links}
              />
            </li>
          ))}
        </ul>
      </section>
    )}
  />
);

export default Projects;
