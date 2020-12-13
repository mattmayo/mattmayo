import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';
import { experience } from '../text/work-experience';

const buildCompanyExperience = (experience, data) => {
  // tbd pass this into experience function so we don't have to declare this here
  experience[0].photo = data.mattCarta1.childImageSharp.fluid;
  experience[1].photo = data.mattCarta1.childImageSharp.fluid;
  experience[2].photo = data.mattCarta1.childImageSharp.fluid;
  experience[3].photo = data.mattCarta1.childImageSharp.fluid;
  experience[4].photo = data.mattCarta1.childImageSharp.fluid;
  experience[5].photo = data.mattCarta1.childImageSharp.fluid;
  experience[6].photo = data.mattCarta1.childImageSharp.fluid;
  experience[7].photo = data.mattCarta1.childImageSharp.fluid;
  experience[8].photo = data.mattCarta1.childImageSharp.fluid;

  return experience.map((company, index) => {
    const CompanyPhoto = () => (
      <div className="flex-none m-4 w-48 md:w-64">
        <Img alt={company.photoAltText} fluid={company.photo} />
      </div>
    );
    const CompanyInfo = () => (
      <div className="m-4">
        <div className="text-2xl">{company.name}</div>
        <div>{company.companyDescription}</div>
        <br />
        <div>{company.workDescription}</div>
      </div>
    );

    return (
      <div className="flex m-4 lg:mx-16" key={company.name}>
        {index % 2 ? (
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
    }
  `);

  return (
    <Layout>
      <div className="">
        <div className="m-8 text-4xl text-center">Work Experience</div>
        <hr />
        {buildCompanyExperience(experience, data)}
      </div>
    </Layout>
  );
};

export default WorkExperiencePage;
