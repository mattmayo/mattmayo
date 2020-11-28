import React from 'react';
import Layout from '../components/layout';
import MattCard from '../components/matt-card';
import 'tailwindcss/tailwind.css';

const IndexPage: React.FC = () => (
  <Layout>
    <div className="bg-whitesmoke">
      <MattCard />
    </div>
  </Layout>
);

export default IndexPage;
