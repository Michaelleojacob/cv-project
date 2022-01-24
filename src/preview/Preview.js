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
    const { personalInfo, socials, skills } = this.props.allInfo;
    return (
      <div>
        <div id="previewWrap">
          <Header personalInfo={personalInfo} />
          <div id="main-side-wrap">
            <Sidebar
              personalInfo={personalInfo}
              socials={socials}
              skills={skills}
            />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
