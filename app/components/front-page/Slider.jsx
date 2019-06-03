import axios from 'axios';
// import Slider as AnimatedSlider from 'react-animated-slider';

import Link from 'app/components/router/Link';

import { STORE } from 'app/constants/common';

const { Component } = wp.element;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;

class Slider extends Component {
  static getDerivedStateFromProps(props) {
    if (!props.getPage().entities && !props.getPage().loading) {
      props.requestSlider();
    }
  }

  render() {
    const { getSlider } = this.props;
    const { entities, loading } = getSlider();

    console.log(entities, loading);

    return (
      <section
        className="slider-wrapper"
      >
        {entities.map(item => (
          <Link
            to={item.link}
            key={`slider-${item.id}`}
            className="slider-content"
            style={{ background: `url('${item.thumbnail}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title.rendered}</h1>
              <p>{item.content.rendered}</p>
              <button type="button">{item.meta['button-text'] || 'Read More'}</button>
            </div>
          </Link>
        ))}
      </section>
    );
  }
}

const mapStateToProps = withSelect((select) => ({
  getSlider: () => select(STORE).getSlider(),
}));

const mapDispatchToProps = withDispatch((dispatch) => ({
  requestSlider: () => {
    dispatch(STORE).requestSliderInit();

    axios.get('/wp-json/wp/v2/slider?thumbnail_size=full')
      .then((response) => {
        dispatch(STORE).requestSliderSuccess(response);
      }).catch(() => {
        dispatch(STORE).requestSliderFail();
      });
  },
}));

export default compose([mapStateToProps, mapDispatchToProps])(Slider);
