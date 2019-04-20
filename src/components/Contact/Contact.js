import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { slug } from '../../utils/utils';

import Container from '../Container/Container';
import Separator from '../Separator/Separator';
import { mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulContact {
      title
      body {
        body
      }
    }
  }
`;

const ContactSection = styled.section`
  text-align: center;

  @media (${mediaQueries.mdMin}) {
    a {
      display: block;
      font-size: 2rem;
    }
  }
`;

const Contact = () => (
  <StaticQuery
    query={query}
    render={({ contentfulContact }) => (
      <ContactSection id={slug(contentfulContact.title)}>
        <Container>
          <h2>{contentfulContact.title}</h2>
          <Separator />
          <div
            dangerouslySetInnerHTML={{
              __html: marked(contentfulContact.body.body),
            }}
          />
        </Container>
      </ContactSection>
    )}
  />
);

export default Contact;
