import React from 'react';
import Header from './header/header';
import Sidebar from './sidebar';
import Main from './main';
import '../styles/preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="previewWrap">
          <Header personalInfo={this.props.allInfo.personalInfo} />
          <div id="main-side-wrap">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
