import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
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
    <div
      style={{
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Card style={{ minWidth: '300px' }}>
        <CardContent>
          <Img fluid={data.file.childImageSharp.fluid} alt="Matt and Elvis" />
        </CardContent>
        <CardActions>
          <Button
            href="https://www.linkedin.com/in/mayomatt/"
            color="primary"
            size="small"
          >
            LinkedIn
          </Button>
          <Button
            href="https://twitter.com/matt_mayo"
            color="primary"
            size="small"
          >
            Twitter
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MattCard;
