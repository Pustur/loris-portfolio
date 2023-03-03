import React from 'react';
import { marked } from 'marked';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Container from '../Container/Container';
import Separator from '../Separator/Separator';

import { mediaQueries } from '../../utils/variables';

const query = graphql`
  {
    contentfulContact {
      title
      slug
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
      <ContactSection id={contentfulContact.slug}>
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
