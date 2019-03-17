import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import '../css/layout.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
    <footer className="page-footer purple darken-3">
      <div className="footer-copyright">
        &copy; 2019 Alex Garrett
      </div>
    </footer>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
