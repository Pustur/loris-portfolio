import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Social from '../components/Social/Social';
import Projects from '../components/Projects/Projects';

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <AboutMe />
    <Projects />
    <Contact />
    <Social />
  </Layout>
);

export default IndexPage;
