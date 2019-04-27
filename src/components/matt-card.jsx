import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const MattCard = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "matt-elvis-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Card>
      <CardContent>
        {console.log(data.file.childImageSharp.fluid)}
        <Img fluid={data.file.childImageSharp.fluid} alt="Matt and Elvis" />
        <Typography align={'center'} component="h3" variant="h3">
          mattmayo.com
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MattCard;
