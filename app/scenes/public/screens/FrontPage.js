import React, { Component } from 'react';
import ReduxWrapper from 'src/ReduxWrapper';

import FrontPageContainer from 'app/components/FrontPageContainer';

import { resetMobileMenu } from 'app/actions/global';

const mapDispatchToProps = dispatch => ({
  resetMobileMenu: () => {
    dispatch(resetMobileMenu());
  },
});

class FrontPage extends Component {
  componentDidMount() {
    this.props.resetMobileMenu();
  }

  render() {
    return (
      <section className="template-front-page">
        <FrontPageContainer push={this.props.history.push} params={this.props.match.params} />
      </section>
    );
  }
}

export default ReduxWrapper(null, mapDispatchToProps, FrontPage);
