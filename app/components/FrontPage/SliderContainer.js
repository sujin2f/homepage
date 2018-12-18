import ReduxWrapper from 'src/ReduxWrapper';

import {
  getSlider,
} from 'app/actions/slider';

import Slider from './Slider';

const mapStateToProps = state => ({ ...state.slider });

const mapDispatchToProps = dispatch => ({
  getSlider: (prevToken) => {
    dispatch(getSlider(prevToken));
  },
});

export default ReduxWrapper(mapStateToProps, mapDispatchToProps, Slider);
