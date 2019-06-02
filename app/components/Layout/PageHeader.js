import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    const { style, text, background } = this.props;

    return (
      <section
        className={`page-header-wrapper ${background ? 'bg-size-contain' : ''}`}
        style={{ backgroundColor: background }}
        >
        <div className="background" style={style || {}} />
        <div className="foreground" />

        <div className="text">
          {text}
        </div>
      </section>
    );
  }
}

export default PageHeader;
