import React from 'react';
import Header from './header/header';
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
        </div>
      </div>
    );
  }
}

export default Preview;
