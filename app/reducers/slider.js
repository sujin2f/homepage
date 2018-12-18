// Import Actions
import {
  GET_SLIDER_INIT,
  GET_SLIDER_SUCCESS,
  GET_SLIDER_FAIL,
} from 'app/actions/slider';

// Initial State
const initialState = {
  entities: [],
  loading: false,
  error: false,
  cancelToken: null,
  series: [],
};

// Actions
function slider(state = initialState, action) {
  switch (action.type) {
    case GET_SLIDER_INIT: {
      return {
        ...state,
        entities: [],
        loading: true,
        error: false,
        cancelToken: action.source,
      };
    }
    case GET_SLIDER_SUCCESS: {
      const entities = action.response.data;

      return {
        ...state,
        entities,
        loading: false,
        error: false,
      };
    }
    case GET_SLIDER_FAIL: {
      return {
        ...state,
        entities: [],
        loading: false,
        error: 'Opps',
      };
    }

    default: {
      return state;
    }
  }
}

export default slider;
