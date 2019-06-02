import React, { Component } from 'react';

import Link from 'src/components/Link';
import SVGIcon from 'app/components/Common/SVGIcon';

class Copywrite extends Component {
  render() {
    return (
      <div id="copywrite">
        <div className="row">
          <div className="columns large-12">
            <Link href="/">
              <SVGIcon name="logo-header-mobile" />
            </Link>
            <p id="copyline">
              Hope21.ca site content is licensed under a&nbsp;
              <Link href="https://creativecommons.org/licenses/by/4.0/">
                Creative Commons Attribution 4.0 International License
              </Link>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Copywrite;
