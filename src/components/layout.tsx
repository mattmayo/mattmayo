import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutPropTypes {
  children: React.ReactNode;
  description: string;
  title: string;
}
const Layout: React.FC<LayoutPropTypes> = ({
  children,
  description,
  title,
}: LayoutPropTypes) => {
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
    }
  `);

  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Matt Mayo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={data.mattElvis.childImageSharp.fluid.src}
        />
        <title>{title}</title>
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Layout;
