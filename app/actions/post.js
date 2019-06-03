export const REQUEST_POST_INIT = 'sujin/post/REQUEST_POST_INIT';
export const REQUEST_POST_SUCCESS = 'sujin/post/REQUEST_POST_SUCCESS';
export const REQUEST_POST_FAIL = 'sujin/post/REQUEST_POST_FAIL';

export const REQUEST_RECENT_POSTS_INIT = 'sujin/post/REQUEST_RECENT_POSTS_INIT';
export const REQUEST_RECENT_POSTS_SUCCESS = 'sujin/post/REQUEST_RECENT_POSTS_SUCCESS';
export const REQUEST_RECENT_POSTS_FAIL = 'sujin/post/REQUEST_RECENT_POSTS_FAIL';

export const REQUEST_SLIDER_INIT = 'sujin/post/REQUEST_SLIDER_INIT';
export const REQUEST_SLIDER_SUCCESS = 'sujin/post/REQUEST_SLIDER_SUCCESS';
export const REQUEST_SLIDER_FAIL = 'sujin/post/REQUEST_SLIDER_FAIL';

// Post
export function requestPostInit(slug) {
  return {
    type: REQUEST_POST_INIT,
    slug,
  };
}

export function requestPostSuccess(slug, response) {
  return {
    type: REQUEST_POST_SUCCESS,
    slug,
    response,
  };
}

export function requestPostFail(slug) {
  return {
    type: REQUEST_POST_FAIL,
    slug,
  };
}

// Recent Posts
export function requestRecentPostsInit() {
  return {
    type: REQUEST_RECENT_POSTS_INIT,
  };
}

export function requestRecentPostsSuccess(response) {
  return {
    type: REQUEST_RECENT_POSTS_SUCCESS,
    response,
  };
}

export function requestRecentPostsFail() {
  return {
    type: REQUEST_RECENT_POSTS_FAIL,
  };
}

// Slider
export function requestSliderInit() {
  return {
    type: REQUEST_SLIDER_INIT,
  };
}

export function requestSliderSuccess(response) {
  return {
    type: REQUEST_SLIDER_SUCCESS,
    response,
  };
}

export function requestSliderFail() {
  return {
    type: REQUEST_SLIDER_FAIL,
  };
}
