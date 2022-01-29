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
        <div className="main-title">
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
        <div className={'main-title'}>projects</div>
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
        <div className="main-title">experience</div>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { description, title } = this.props.personalInfo;
    const { list } = this.props.projects;
    return (
      <div id="mainWrap">
        <Description description={description} title={title} />
        <Projects list={list} />
        <Experience />
      </div>
    );
  }
}

export default Main;
