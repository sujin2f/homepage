import Public from 'app/scenes/Public';
import Slider from 'app/components/front-page/Slider';

const { Component } = wp.element;

class FrontPage extends Component {
  render() {
    return (
      <Public>
        <Slider />
      </Public>
    );
  }
}

export default FrontPage;
