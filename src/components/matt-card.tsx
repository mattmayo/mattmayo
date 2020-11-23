import React from 'react';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
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
          fixed(width: 14) {
            ...GatsbyImageSharpFixed
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
        justifyContent: 'center',
      }}
    >
      <Card style={{ minWidth: '300px' }}>
        <CardContent>
          <Img
            fluid={data.mattElvis.childImageSharp.fluid}
            alt="Matt and Elvis"
          />
        </CardContent>
        <CardActions>
          <Button
            href="https://www.linkedin.com/in/mayomatt/"
            color="primary"
            size="small"
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Img
                fixed={data.linkedInLogo.childImageSharp.fixed}
                alt="Twitter logo"
              />
              <span style={{ paddingLeft: '4px' }}>LinkedIn</span>
            </div>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MattCard;
