import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          2019 &copy; Online Order App{' '}
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer" >
            test.com
          </a>
            . All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
