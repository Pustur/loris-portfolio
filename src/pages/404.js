import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Seo from '../components/Seo/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" />
    <Container>
      <h1>404 - Not found</h1>
      <p>The page you are looking for doesn&apos;t exist :(</p>
      <p>
        <Link to="/">Return to home page</Link>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
