import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    // const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    let code;
    if (res) {
      code = res.statusCode;
    } else if (err) {
      code = err.statusCode;
    } else {
      code = null;
    }
    return { statusCode: code };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Hockey Scrub</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <main>
          <div className="container">
            <h1>
              {statusCode === 404
                && '404 Error: Page not found'}
              {statusCode === 500
               && 'Internal server error'}
              {!statusCode && 'An error occured on the client'}
            </h1>
          </div>
        </main>

      </React.Fragment>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

Error.defaultProps = {
  statusCode: null,
};

export default Error;
