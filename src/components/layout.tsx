import React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutPropTypes {
  children: React.ReactNode;
  title: string;
}
const Layout: React.FC<LayoutPropTypes> = ({
  children,
  title,
}: LayoutPropTypes) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
    {children}
  </React.Fragment>
);

export default Layout;
