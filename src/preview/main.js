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

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.stat = {};
  }
  formatDate = (date) => {
    const splitDate = date.split('-');
    return `${splitDate[1]}/${splitDate[0]}`;
  };
  render() {
    const { city, degree, subject, university, from, to } =
      this.props.education;
    return (
      <div>
        <div className={'main-title'}>education</div>
        <div id="main-unvi">{university !== '' ? university : null}</div>
        <div id="main-city">{city !== '' ? city : null}</div>
        <div id="main-deg">{degree !== '' ? degree : null}</div>
        <div id="main-sub">{subject !== '' ? subject : null}</div>
        <div id="main-date">
          {from !== '' ? `${this.formatDate(from)} - ` : null}
          {from !== '' && to !== '' ? this.formatDate(to) : null}
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
        <div className={'main-title'}>experience</div>
      </div>
    );
  }
}

function checkIfObjectIsPopulated(obj) {
  const { isOpen, ...checkIfBlank } = obj;
  const keys = Object.keys(checkIfBlank);
  return keys.every((item) => obj[item] !== '');
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, title } = this.props.personalInfo;
    const { education } = this.props;
    const { list } = this.props.projects;
    const { renderProjects } = this.props.projOrJob;
    const isEducationPopulated = checkIfObjectIsPopulated(education);
    console.log(isEducationPopulated);
    return (
      <div id="mainWrap">
        <Description description={description} title={title} />
        {isEducationPopulated ? (
          <div>
            <Education education={education} />
          </div>
        ) : null}
        {renderProjects === 'true' ? <Projects list={list} /> : <Experience />}
      </div>
    );
  }
}

export default Main;
