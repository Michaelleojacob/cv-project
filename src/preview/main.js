import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { description, title } = this.props;
    return (
      <div id="descriptionWrap">
        <div id="main-title">
          {title !== '' ? title : 'professional summary'}
        </div>
        <div id="main-description">
          {description !== ''
            ? description
            : `Highly motivated, self-starting developer seeking to launch a career building web applications and services. Familiar with development and deployment process for many web-based technologies.`}
        </div>
      </div>
    );
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>projects</div>
      </div>
    );
  }
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>experience</div>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    const { description, title } = this.props.personalInfo;
    return (
      <div id="mainWrap">
        <Description description={description} title={title} />
        <Projects />
        <Experience />
      </div>
    );
  }
}

export default Main;
