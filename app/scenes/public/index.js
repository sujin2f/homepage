import React, { Component } from 'react';

import ContentsWrapperContainer from 'app/components/Common/ContentsWrapperContainer';
import GlobalHeaderContainer from 'app/components/Layout/GlobalHeaderContainer';
import GlobalFooter from 'app/components/Layout/GlobalFooter';

class Public extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      this.gtag = this.gtag.bind(this);

      this.gtag('js', new Date());
      this.gtag('config', 'UA-117697376-1');
    }
  }

  gtag(...args) {
    window.dataLayer.push(args);
  }

  render() {
    return (
      <ContentsWrapperContainer>
        <GlobalHeaderContainer />

        <section id="container">
          {this.props.children}
        </section>

        <GlobalFooter />
      </ContentsWrapperContainer>
    );
  }
}

export default Public;
