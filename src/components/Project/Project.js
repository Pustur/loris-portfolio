import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, mediaQueries, zIndex } from '../../utils/variables';

import Technology from '../Technology/Technology';

const StyledProject = styled.article`
  @media (${mediaQueries.mdMin}) {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    align-items: center;

    > *:nth-child(1),
    > *:nth-child(2) {
      grid-row: 1 / 2;
    }

    > *:nth-child(1) {
      grid-column: ${props => (props.isOdd ? '1 / -2' : '2 / -1')};
    }

    > *:nth-child(2) {
      ${props => props.isOdd && 'text-align: right;'}
      grid-column: ${props => (props.isOdd ? '2 / -1' : '1 / -2')};
      z-index: ${zIndex.projectInfo};
    }
  }

  @media (${mediaQueries.lgMin}) {
    > *:nth-child(2) {
      max-width: 30rem;
      ${props => props.isOdd && 'margin-right: auto;'}
      ${props => !props.isOdd && 'margin-left: auto;'}
    }
  }
`;

const StyledImg = styled(Img)`
  @media (${mediaQueries.mdMin}) {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to ${props => (props.isOdd ? 'left' : 'right')},
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0) 40%
      );
      z-index: ${zIndex.projectOverlay};
    }
  }
`;

const Title = styled.h3`
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0.5em;

  @media (${mediaQueries.smMax}) {
    text-align: center;
    transform: translate3d(0, -50%, 0);
  }
`;

const Info = styled.div`
  @media (${mediaQueries.mdMin}) {
    display: inline-flex;
    align-items: center;

    > :first-child {
      order: ${props => Number(props.isOdd)};
      ${props => props.isOdd && 'margin-left: 1rem;'}
      ${props => !props.isOdd && 'margin-right: 1rem;'}
    }
  }
`;

const Type = styled.div`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  color: ${colors.foregroundLight};
  background-color: ${colors.accent};
  line-height: 1;
  border-radius: 99px;
  padding: 0.4rem 0.6rem;
  white-space: nowrap;
`;

const TechnologyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  line-height: 0;

  @media (${mediaQueries.smMax}) {
    margin-top: 1.2rem;
  }
`;

const TechnologyItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: 1rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (${mediaQueries.smMax}) {
    text-align: center;
  }
`;

const LinksItem = styled.li`
  @media (${mediaQueries.smMax}) {
    & + & {
      margin-top: 0.5rem;
    }
  }

  @media (${mediaQueries.mdMin}) {
    display: inline-block;

    & + & {
      margin-top: 0.5rem;
      margin-left: 0.5rem;
    }
  }
`;

const LinksLink = styled.a`
  display: block;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border: 1px solid ${colors.accent};
  transition: color 0.3s ease, background-color 0.3s ease;
  font-size: 0.875rem;

  &::after {
    content: ' →';
    font-family: sans-serif;
  }

  &:hover,
  &:focus {
    color: ${colors.foregroundLight};
    background-color: ${colors.accent};
  }

  @media (${mediaQueries.mdMin}) {
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Project = ({
  title,
  description,
  type,
  technologies,
  links,
  fluid,
  isOdd,
}) => (
  <StyledProject isOdd={isOdd}>
    <div>
      <StyledImg fluid={fluid} isOdd={isOdd} />
    </div>
    <div>
      <Title>{title}</Title>
      <Info isOdd={isOdd}>
        <div>
          <Type>{type}</Type>
        </div>
        <TechnologyList>
          {technologies.sort().map(technology => (
            <TechnologyItem key={technology}>
              <Technology technology={technology} />
            </TechnologyItem>
          ))}
        </TechnologyList>
      </Info>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <LinksList>
        {links.map(link => (
          <LinksItem key={link.id}>
            <LinksLink href={link.href}>{link.text}</LinksLink>
          </LinksItem>
        ))}
      </LinksList>
    </div>
  </StyledProject>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
  isOdd: PropTypes.bool.isRequired,
};

export default Project;
