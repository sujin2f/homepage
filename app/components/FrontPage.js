import React, { Component, Fragment } from 'react';
import PageContainer from 'app/components/PageContainer';
import SliderContainer from './FrontPage/SliderContainer';

class FrontPage extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const params = {
      pageSlug: 'front-page',
    };
    return (
      <Fragment>
        <SliderContainer />
        <main className="page-wrapper">
          <PageContainer push={this.props.push} params={params} />
        </main>
      </Fragment>
    );
  }
}

export default FrontPage;
