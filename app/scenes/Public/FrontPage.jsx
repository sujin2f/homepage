import axios from 'axios';

import Public from 'app/scenes/Public';
import Slider from 'app/components/front-page/Slider';
import Content from 'app/components/single/Content';

import { STORE } from 'app/constants/common';

const { Component } = wp.element;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = { slug: false };
  }

  static getDerivedStateFromProps(props, state) {
    const slug = 'front-page';

    if (!slug || state.slug === slug || props.getPage(slug).page) {
      return { slug };
    }

    props.requestPage(slug);
    return { slug };
  }

  render() {
    const {
      page,
    } = this.props.getPage(this.state.slug);

    return (
      <Public className="front-page scrolled">
        <Slider />

        {page && (
          <section className="row">
            <Content post={page} className="medium-12" />
          </section>
        )}
      </Public>
    );
  }
}

const mapStateToProps = withSelect((select) => ({
  getPage: (slug) => select(STORE).getPage(slug),
}));

const mapDispatchToProps = withDispatch((dispatch) => ({
  requestPage: (slug) => {
    dispatch(STORE).requestPageInit(slug);

    axios.get(`/wp-json/wp/v2/pages/?slug=${slug}`)
      .then((response) => {
        dispatch(STORE).requestPageSuccess(slug, response);
      }).catch(() => {
        dispatch(STORE).requestPageFail(slug);
      });
  },
}));

export default compose([mapStateToProps, mapDispatchToProps])(FrontPage);
