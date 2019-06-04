/* eslint-disable import/prefer-default-export */

export const getPost = (state, slug) => ({
  post: state.post.entities[slug] || false,
  loading: state.post.loading,
});

export const getRecentPosts = (state) => ({
  entities: Object.keys(state.post.ids)
    .slice(-4)
    .map((key) => state.post.ids[key])
    .map((key) => state.post.entities[key]),
  loading: state.post.recentLoading,
});

export const getSlider = (state) => ({
  entities: state.post.slider.entities || false,
  loading: state.post.slider.loading,
});

/* eslint-enable import/prefer-default-export */
