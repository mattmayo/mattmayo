import React from 'react';
import Layout from '../components/layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="404 Not Found">
      <p className="m-16 text-center">
        Matt&apos;s lost. Can you let him know?
      </p>
    </Layout>
  );
};

export default NotFoundPage;
