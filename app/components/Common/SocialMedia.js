import React, { Component } from 'react';

import SOCIAL_MEDIA from 'app/constants/menu';
import SVGIcon from 'app/components/Common/SVGIcon';

class SocialMedia extends Component {
  render() {
    const { className, position } = this.props;

    return (
      <ul className={`${className || ''} social-media`}>
        {Object.keys(SOCIAL_MEDIA).map(index => (
          <li key={`social-media-${position}-${index}`}>
            <a href={SOCIAL_MEDIA[index].url} target="_blank" rel="noopener noreferrer">
              <SVGIcon name={SOCIAL_MEDIA[index].icon} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default SocialMedia;
