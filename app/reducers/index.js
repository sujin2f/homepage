import { combineReducers } from 'redux';

import global from './global';
import archive from './archive';
import flickr from './flickr';
import post from './post';
import page from './page';
import recentPost from './recent-post';
import relatedPost from './related-post';
import slider from './slider';

const reducer = combineReducers({
  archive,
  global,
  flickr,
  post,
  page,
  recentPost,
  relatedPost,
  slider,
});

export default reducer;
