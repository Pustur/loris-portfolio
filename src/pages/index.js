import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Social from '../components/Social/Social';
import Projects from '../components/Projects/Projects';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <AboutMe />
    <Projects />
    <Contact />
    <Social />
  </Layout>
);

export default IndexPage;
