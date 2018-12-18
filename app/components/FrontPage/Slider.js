import React, { Component } from 'react';
import Slider from 'react-animated-slider';

class FrontPageSlider extends Component {
  componentDidMount() {
    const {
      getSlider,
      cancelToken,
    } = this.props;

    getSlider(cancelToken);
  }

  render() {
    const {
      entities,
      loading,
      error,
    } = this.props;

    console.log(entities, loading, error);

    return (
      <Slider
        className="slider-wrapper"
        duration="500"
        >
        {entities.map(item => (
          <div
            key={`slider-${item.id}`}
            className="slider-content"
            style={{ background: `url('${item.thumbnail}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title.rendered}</h1>
              <p>{item.content.rendered}</p>
              <button>{item.meta['button-text'] || 'Read More'}</button>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default FrontPageSlider;
