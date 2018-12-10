import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/styles/hljs';

import PageHeader from 'app/components/Layout/PageHeader';
import { DEV_TOOLS_IMAGE } from 'app/constants/thumbnail';
import { sortText } from 'app/actions/dev-tools';

import Menu from './Menu';

class TextSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checked: true,
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  handleChangeText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleChangeCheckbox() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const convertedText = this.state.text ? sortText(this.state.text, this.state.checked) : false;

    const text = (
      <Fragment>
        <h1>
          <div className="flag">
            <span className="label">Dev Tools</span>
          </div>
          <span>Text Sort</span>
        </h1>
      </Fragment>
    );

    return (
      <Fragment>
        <Helmet>
          <title>Sujin | Dev Tools | Text Sort</title>
          <meta name="description" content="Developer's tool" />
          <meta property="og:title" content="Sujin | Dev Tools | Text Sort" />
          <meta property="og:image" content={DEV_TOOLS_IMAGE} />
        </Helmet>

        <PageHeader
          style={{ backgroundImage: `url(${DEV_TOOLS_IMAGE})` }}
          text={text}
          />

        <section className="row container">
          <aside className="columns large-3 medium-12">
            <Menu />
          </aside>

          <article className="columns large-9 medium-12">
            <label htmlFor="remove-empty">
              <input
                id="remove-empty"
                type="checkbox"
                onChange={this.handleChangeCheckbox}
                checked={this.state.checked}
              />
              Remove Empty Lines
            </label>
            <textarea id="sort-text" onChange={this.handleChangeText} rows="10" />

            {convertedText &&
              <SyntaxHighlighter style={arduinoLight} showLineNumbers>
                {convertedText}
              </SyntaxHighlighter>
            }
          </article>
        </section>
      </Fragment>
    );
  }
}

export default TextSort;
