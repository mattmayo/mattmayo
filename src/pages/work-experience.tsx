import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';
import { getExperience } from '../text/work-experience';

const buildCompanyExperience = (experience, window) => {
  return experience.map((company, index) => {
    const CompanyPhoto = () => (
      <div className="md:flex-none md:m-4 w-full md:w-96">
        <Img alt={company.photoAltText} fluid={company.photo} />
      </div>
    );
    const CompanyInfo = () => (
      <div className="m-4 text-justify">
        <div className="text-2xl">{company.name}</div>
        <div>{company.companyDescription}</div>
        <br />
        <div>{company.workDescription}</div>
      </div>
    );
    return (
      <React.Fragment key={company.name}>
        <div className="md:flex md:m-4 lg:mx-16">
          {index % 2 && window && window.innerWidth > 768 ? (
            <>
              <CompanyInfo />
              <CompanyPhoto />
            </>
          ) : (
            <>
              <CompanyPhoto />
              <CompanyInfo />
            </>
          )}
        </div>
        <hr className="my-4" />
      </React.Fragment>
    );
  });
};

const WorkExperiencePage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mattCarta1: file(relativePath: { eq: "matt-carta-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattEBay1: file(relativePath: { eq: "matt-ebay-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattFiveStars1: file(relativePath: { eq: "matt-fivestars-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattRocketLawyer1: file(
        relativePath: { eq: "matt-rocket-lawyer-1.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattZynga1: file(relativePath: { eq: "matt-zynga-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattPayPal1: file(relativePath: { eq: "matt-paypal-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattSynApps1: file(relativePath: { eq: "matt-syn-apps-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattITRACS1: file(relativePath: { eq: "matt-itracs-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mattInterTel1: file(relativePath: { eq: "matt-inter-tel-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  // eslint-disable-next-line no-undef
  const windowVariable = global && global.window;

  return (
    <Layout>
      <div className="">
        <div className="m-8 text-4xl text-center">Work Experience</div>
        <hr />
        {buildCompanyExperience(getExperience(data), windowVariable)}
      </div>
    </Layout>
  );
};

export default WorkExperiencePage;
