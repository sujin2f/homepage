import React, { Component } from 'react';

import Link from 'src/components/Link';

class Copywrite extends Component {
  render() {
    return (
      <div id="copywrite">
        <div className="flex-container-row row">
          <div className="flex-container-row">
            <Link className="logo txt2image hide-for-small-only" href="/">Hope21</Link>
            <p id="copyline">
              Hope21.ca site content is licensed under a&nbsp;
              <Link href="https://creativecommons.org/licenses/by/4.0/">
                Creative Commons Attribution 4.0 International License
              </Link>.
              <br />
              Hosting for Hope21.ca is generously provided by DigitalOcean.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Copywrite;
