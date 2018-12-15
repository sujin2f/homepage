import React, { Component } from 'react';

import CopywriteContainer from 'app/components/Layout/GlobalFooter/CopywriteContainer';

class GlobalFooter extends Component {
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <section id="global-footer">
        <div className="row widget-area">
          <div className="small-12 medium-4 large-4 columns">
            Ad will be here
          </div>
          <div className="small-12 medium-4 large-4 columns">
            Second widget
          </div>
          <div className="small-12 medium-4 large-4 columns">
            Third widget
          </div>
        </div>
        <CopywriteContainer />
      </section>
    );
  }
}

export default GlobalFooter;
