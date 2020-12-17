import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import { getExperience } from '../text/work-experience';
import { useWindowSize } from '../utils/window-resize';

const buildCompanyExperience = (
  experience,
  windowWidth
): React.ReactFragment => {
  return experience.map((company, index) => {
    const xsmall = 384;
    const medium = 768;

    let photoClasses = 'md:flex-none md:m-4 w-full md:w-96';

    if (windowWidth < xsmall) {
      photoClasses = 'w-full';
    } else if (windowWidth < medium) {
      photoClasses = 'm-auto w-96';
    }

    const CompanyPhoto: React.FC = () => (
      <div className={photoClasses}>
        <Img alt={company.photoAltText} fluid={company.photo} />
      </div>
    );
    const CompanyInfo: React.FC = () => (
      <div className="m-4 text-justify">
        <div className="text-2xl">{company.name}</div>
        <div>{company.companyDescription}</div>
        <br />
        <div>{company.workDescription}</div>
      </div>
    );
    return (
      <React.Fragment key={company.name}>
        {index % 2 && windowWidth > medium ? (
          <div className="md:flex md:m-4 lg:mx-16">
            <CompanyInfo />
            <CompanyPhoto />
          </div>
        ) : (
          <div className="md:flex md:m-4 lg:mx-16">
            <CompanyPhoto />
            <CompanyInfo />
          </div>
        )}
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

  const windowWidth = useWindowSize().innerWidth;

  return (
    <Layout>
      <div className="">
        <div className="m-8 text-4xl text-center">Work Experience</div>
        <hr />
        {buildCompanyExperience(getExperience(data), windowWidth)}
      </div>
    </Layout>
  );
};

export default WorkExperiencePage;
