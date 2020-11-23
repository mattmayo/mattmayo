import React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutPropTypes {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropTypes> = ({ children }: LayoutPropTypes) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Helmet>
    {children}
  </React.Fragment>
);

export default Layout;
