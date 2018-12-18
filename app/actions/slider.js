import axios from 'app/utils/axios';
import axiosOrigin from 'axios';

export const GET_SLIDER_INIT = 'sujin/related-post/GET_SLIDER_INIT';
export const GET_SLIDER_SUCCESS = 'sujin/related-post/GET_SLIDER_SUCCESS';
export const GET_SLIDER_FAIL = 'sujin/related-post/GET_SLIDER_FAIL';

// Get Related Posts

function getSliderInit(source) {
  return {
    type: GET_SLIDER_INIT,
    source,
  };
}
function getSliderSuccess(response) {
  return {
    type: GET_SLIDER_SUCCESS,
    response,
  };
}
function getSliderFail(error) {
  return {
    type: GET_SLIDER_FAIL,
    error,
  };
}

export function getSlider(prevToken) {
  if (prevToken.cancel) {
    prevToken.cancel('Canceled');
  }

  const cancelToken = axiosOrigin.CancelToken;
  const source = cancelToken.source();

  return (dispatch) => {
    dispatch(getSliderInit(source));


    axios.get('wp-json/wp/v2/slider?thumbnail_size=full', {}, { cancelToken: source.token })
      .then((response) => {
        dispatch(getSliderSuccess(response));
      }).catch((error) => {
        dispatch(getSliderFail(error));
      });
  };
}
