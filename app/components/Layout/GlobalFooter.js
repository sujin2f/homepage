import React, { Component } from 'react';

import Copywrite from 'app/components/Layout/GlobalFooter/Copywrite';
import SocialMedia from 'app/components/Common/SocialMedia';
import SVGIcon from 'app/components/Common/SVGIcon';

class GlobalFooter extends Component {
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <footer id="global-footer">
        <div className="row widget-area">
          <div className="small-12 medium-4 large-4 columns contact">
            <div>
              <h1>Contact</h1>
              <a href="mailto:hope21.ca@google.com">
                hope21.ca@google.com
              </a>
            </div>
            <SocialMedia position="bottom" />
          </div>
          <div className="small-12 medium-4 large-4 columns powered-by">
            <h1>Powered by</h1>
            <ul>
              <li>
                <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer">
                  <SVGIcon name="wordpress" />
                </a>
              </li>
              <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  <SVGIcon name="react" />
                </a>
              </li>
            </ul>
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
