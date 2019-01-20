import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Contact from '../components/Contact/Contact';
import Social from '../components/Social/Social';
import Projects from '../components/Projects/Projects';
import Age from '../components/Age/Age';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>
      I am <Age date={new Date(1995, 3, 14)} /> years old.
    </p>
    <Projects />
    <Contact />
    <Social />
  </Layout>
);

export default IndexPage;
