import {
  REQUEST_POST_INIT,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAIL,

  REQUEST_RECENT_POSTS_INIT,
  REQUEST_RECENT_POSTS_SUCCESS,
  REQUEST_RECENT_POSTS_FAIL,

  REQUEST_SLIDER_INIT,
  REQUEST_SLIDER_SUCCESS,
  REQUEST_SLIDER_FAIL,
} from 'app/actions/post';

import { IS_ERROR } from 'app/constants/common';

const initialState = {
  entities: {},
  ids: {},
  loading: false,
  recentLoading: false,
  slider: {
    entities: [],
    loading: false,
  },
};

function post(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POST_INIT: {
      return {
        ...state,
        loading: true,
      };
    }

    case REQUEST_POST_SUCCESS: {
      const data = Object.keys(action.response.data) === 0 ? IS_ERROR : action.response.data;

      const unorderId = { ...state.ids };
      unorderId[data.id] = action.slug;

      const ids = {};
      Object.keys(unorderId).sort().forEach((key) => {
        ids[key] = unorderId[key];
      });

      return {
        ...state,
        entities: {
          ...state.entities,
          [action.slug]: data,
        },
        ids,
        loading: false,
      };
    }

    case REQUEST_POST_FAIL: {
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.slug]: IS_ERROR,
        },
        loading: false,
      };
    }

    case REQUEST_RECENT_POSTS_INIT: {
      return {
        ...state,
        recentLoading: true,
      };
    }

    case REQUEST_RECENT_POSTS_SUCCESS: {
      const response = action.response.data.reduce((acc, value) => ({
        ...acc,
        [value.slug]: value,
      }), {});

      const unorderId = action.response.data.reduce((acc, value) => ({
        ...acc,
        [value.id]: value.slug,
      }), { ...state.ids });

      const ids = {};
      Object.keys(unorderId).sort().forEach((key) => {
        ids[key] = unorderId[key];
      });

      return {
        ...state,
        entities: {
          ...state.entities,
          ...response,
        },
        ids,
        recentLoading: false,
      };
    }

    case REQUEST_RECENT_POSTS_FAIL: {
      return {
        ...state,
        recentLoading: false,
      };
    }

    case REQUEST_SLIDER_INIT: {
      return {
        ...state,
        slider: {
          ...state.slider,
          loading: true,
        },
      };
    }

    case REQUEST_SLIDER_SUCCESS: {
      return {
        ...state,
        slider: {
          ...state.slider,
          entities: action.response.data,
          loading: false,
        },
      };
    }

    case REQUEST_SLIDER_FAIL: {
      return {
        ...state,
        slider: {
          ...state.slider,
          loading: false,
        },
      };
    }


    default: {
      return state;
    }
  }
}

export default post;
