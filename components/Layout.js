import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Layout = ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
