// import Slider as AnimatedSlider from 'react-animated-slider';
import Link from 'app/components/router/Link';

const { Component } = wp.element;

class Slider extends Component {
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
      <section
        className="slider-wrapper"
        duration="500"
        autoplay="5000"
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
              <button>{item.meta['button-text'] || 'Read More'}</button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
export default Slider;
