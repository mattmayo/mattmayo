import React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutPropTypes {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropTypes> = ({ children }: LayoutPropTypes) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    {children}
  </React.Fragment>
);

export default Layout;
