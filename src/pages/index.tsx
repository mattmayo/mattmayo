import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mattElvis: file(relativePath: { eq: "matt-elvis-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattMayoWritten: file(relativePath: { eq: "matt-mayo-written.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      linkedInLogo: file(relativePath: { eq: "linkedin-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      gitHubLogo: file(relativePath: { eq: "github-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
          <div className="mt-4 w-48 md:w-64">
            <Img
              alt="Matt Mayo"
              fluid={data.mattMayoWritten.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="hover:underline mb-4 md:mb-6 text-3xl md:text-4xl">
          <Link to="/work-experience">Work Experience</Link>
        </div>
        <div className="m-2 w-32 md:w-48">
          <a href="https://www.linkedin.com/in/mayomatt/">
            <Img
              alt="LinkedIn logo"
              fluid={data.linkedInLogo.childImageSharp.fluid}
            />
          </a>
        </div>
        <div className="m-2 w-28 md:w-40">
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
