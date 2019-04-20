import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

import Container from '../Container/Container';
import { mediaQueries } from '../../utils/variables';

import Separator from '../Separator/Separator';

const query = graphql`
  {
    contentfulAboutMe {
      title
      body {
        body
      }
    }
  }
`;

const AboutMeSection = styled.section`
  text-align: center;
`;

const Body = styled.div`
  @media (${mediaQueries.mdMin}) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
  }
`;

const AboutMe = () => (
  <StaticQuery
    query={query}
    render={({ contentfulAboutMe }) => (
      <AboutMeSection id={slug(contentfulAboutMe.title)}>
        <Container>
          <h2>{contentfulAboutMe.title}</h2>
          <Separator />
          <Body
            dangerouslySetInnerHTML={{
              __html: marked(contentfulAboutMe.body.body),
            }}
          />
        </Container>
      </AboutMeSection>
    )}
  />
);

export default AboutMe;
