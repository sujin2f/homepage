import React, { Component } from 'react';

import Copywrite from 'app/components/Layout/GlobalFooter/Copywrite';
import SocialMedia from 'app/components/Common/SocialMedia';

class GlobalFooter extends Component {
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <footer id="global-footer">
        <div className="row widget-area">
          <div className="small-12 medium-4 large-4 columns">
            <h1>Contact</h1>
            E. hope21.ca@google.com
            <SocialMedia position="bottom" />
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <h1>Powered by</h1>
          </div>
          <div className="small-12 medium-4 large-4 columns">
            <h1>Theme Creator</h1>
          </div>
        </div>

        <Copywrite />
      </footer>
    );
  }
}

export default GlobalFooter;
