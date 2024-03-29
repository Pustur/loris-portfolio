/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import ReactDOM from 'react-dom';

import Age from './src/components/Age/Age';

const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};

const onInitialClientRender = () => {
  const ageElements = Array.from(document.querySelectorAll('[data-age]'));

  ageElements.forEach(ageElement => {
    const { age } = ageElement.dataset;

    ReactDOM.render(
      <Age date={new Date(Date.UTC(...age.split(',')))} />,
      ageElement,
    );
  });
};

export { onClientEntry, onInitialClientRender };
