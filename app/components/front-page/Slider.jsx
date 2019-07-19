import axios from 'axios';
import AnimatedSlider from 'react-animated-slider';

import Link from 'app/components/router/Link';

import { STORE } from 'app/constants/common';

import { getRenderedText } from 'app/utils/common';

const { Component } = wp.element;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;

class Slider extends Component {
  static getDerivedStateFromProps(props) {
    console.log(props.getSlider());
    if (props.getSlider().entities.length === 0 && !props.getSlider().loading) {
      props.requestSlider();
    }
  }

  render() {
    const { getSlider } = this.props;
    const { entities } = getSlider();

    return (
      <AnimatedSlider
        className="slider-wrapper"
        duration="500"
        autoplay="5000"
      >
        {entities.map(item => (
          <div
            key={`slider-${item.id}`}
            className="slider-content"
            style={{ background: `url('${item.thumbnail}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title.rendered}</h1>
              <p dangerouslySetInnerHTML={{ __html: getRenderedText(item.content) }} />

              <Link to={item.meta['link-url']}>{item.meta['button-text'] || 'Read More'}</Link>
            </div>
          </div>
        ))}
      </AnimatedSlider>
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
