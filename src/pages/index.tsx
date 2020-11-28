import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mattElvis: file(relativePath: { eq: "matt-elvis-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattMayoWritten: file(relativePath: { eq: "matt-mayo-written.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      linkedInLogo: file(relativePath: { eq: "linkedin-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      gitHubLogo: file(relativePath: { eq: "github-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="bg-whitesmoke flex flex-col items-center md:justify-center h-screen">
        <div className="bg-white flex flex-col items-center m-8 p-4 rounded-sm shadow">
          <div className="w-64 md:w-96">
            <Img
              alt="Matt and Elvis"
              fluid={data.mattElvis.childImageSharp.fluid}
            />
          </div>
          <div className="mt-4 w-64">
            <Img
              alt="Matt Mayo"
              fluid={data.mattMayoWritten.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="m-2 w-48">
          <a href="https://www.linkedin.com/in/mayomatt/">
            <Img
              alt="LinkedIn logo"
              fluid={data.linkedInLogo.childImageSharp.fluid}
            />
          </a>
        </div>
        <div className="m-2 w-40">
          <a href="https://github.com/mattmayo">
            <Img
              alt="GitHub logo"
              fluid={data.gitHubLogo.childImageSharp.fluid}
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
