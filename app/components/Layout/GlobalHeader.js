import React, { Component } from 'react';

import Link from 'src/components/Link';
import MenuContainer from 'app/components/Common/MenuContainer';
import SVGIcon from 'app/components/Common/SVGIcon';

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchOpened: false,
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleKeyDownSearch = this.handleKeyDownSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);

    this.props.getMenu('Global Nav');
  }

  handleChangeSearch(event) {
    this.setState({ searchString: event.target.value });
  }

  handleKeyDownSearch(event) {
    if (event.keyCode === 13) {
      // TODO Search!!
      document.getElementById('search-button').click();
    }
  }

  handleSubmitSearch() {
    if (!this.state.searchOpened || !this.state.searchString) {
      if (!this.state.searchOpened) {
        setTimeout(() => document.getElementById('search-string').focus(), 300);
      } else {
        setTimeout(() => document.getElementById('search-string').blur(), 300);
      }

      this.setState({
        searchOpened: !this.state.searchOpened,
        searchString: '',
      });
    } else {
      // TODO Search!!
      this.setState({ searchString: '' });
    }
  }

  render() {
    const { toggleMobileMenu, mobileMenuActivated } = this.props;
    const movileActivated = mobileMenuActivated ? 'activated' : '';

    return (
      <header
        id="global-header"
        itemType="http://schema.org/WPHeader"
        >
        <section className="gap desktop-padding" />

        <button id="mobile-menu" onClick={toggleMobileMenu}>
          <SVGIcon name="burger" />
        </button>

        <section className="gap mobile-left" />

        <Link href={`${process.env.SUJIN_BASE_URL}`} className="logo">
          <SVGIcon name="logo-header" className="desktop tablet" />
          <SVGIcon name="logo-header-mobile" className="mobile" />
        </Link>

        <MenuContainer className={movileActivated} />

        <section className="gap desktop-middle" />

        <section
          id="search-container"
          className={`${this.state.searchOpened ? 'open' : ''} ${movileActivated}`}
          >
          <input
            type="text"
            id="search-string"
            value={this.state.searchString}
            onChange={this.handleChangeSearch}
            onKeyDown={this.handleKeyDownSearch}
          />
          <button
            id="search-button"
            onClick={e => this.handleSubmitSearch(e)}
            >
            <SVGIcon name="magnet" />
          </button>
        </section>

        <section className="gap mobile-right" />
        <section className="gap desktop-padding" />
      </header>
    );
  }
}

export default GlobalHeader;
