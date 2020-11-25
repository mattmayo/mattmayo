import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const MattCard: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mattElvis: file(relativePath: { eq: "matt-elvis-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedInLogo: file(relativePath: { eq: "linkedin-logo.png" }) {
        childImageSharp {
          fixed(height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gitHubLogo: file(relativePath: { eq: "github-logo.png" }) {
        childImageSharp {
          fixed(height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="bg-whitesmoke flex h-screen items-center">
      <div className="m-4 mx-auto p-4 rounded-sm shadow w-60 md:w-96">
        <Img
          fluid={data.mattElvis.childImageSharp.fluid}
          alt="Matt and Elvis"
        />
        <div className="flex flex-row mt-4">
          <a href="https://www.linkedin.com/in/mayomatt/">
            <div className="mt-2">
              <Img
                fixed={data.linkedInLogo.childImageSharp.fixed}
                alt="LinkedIn logo"
              />
            </div>
          </a>
          <a href="https://github.com/mattmayo">
            <div className="mt-2">
              <Img
                fixed={data.gitHubLogo.childImageSharp.fixed}
                alt="GitHub logo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MattCard;
