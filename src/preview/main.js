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
  renderProjectSection(section) {
    return (
      <div key={section.id} className={'project-preview'}>
        <div className="proj-prev-title">{section.title}</div>
        <div className="proj-prev-repo">{section.repo}</div>
        <div className="proj-prev-live">{section.live}</div>
        <div className="proj-prev-desc">{section.description}</div>
        <div className="proj-prev-high">{section.highlights}</div>
        <div className="proj-prev-tech">{section.technology}</div>
      </div>
    );
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <div className={'main-title'}>projects</div>
        {list.map((item) => this.renderProjectSection(item))}
      </div>
    );
  }
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderExperienceSection(section) {
    return (
      <div key={section.id} className={'experience-preview'}>
        <div className="exp-prev-position">{section.position}</div>
        <div className="exp-prev-company">{section.company}</div>
        <div className="exp-prev-city">{section.city}</div>
        <div className="exp-prev-summary">{section.summary}</div>
        <div className="exp-prev-from">{section.from}</div>
        <div className="exp-prev-to">{section.to}</div>
      </div>
    );
  }
  render() {
    const { list } = this.props;
    return (
      <div>
        <div className={'main-title'}>experience</div>
        {list.map((item) => this.renderExperienceSection(item))}
      </div>
    );
  }
}

function checkIfObjectIsBlank(obj) {
  const { isOpen, ...checkIfBlank } = obj;
  const keys = Object.keys(checkIfBlank);
  return keys.every((item) => obj[item] === '');
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEducationBlank: checkIfObjectIsBlank(this.props.education),
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.education !== prevProps.education) {
      this.setState({
        isEducationBlank: checkIfObjectIsBlank(this.props.education),
      });
    }
  }
  render() {
    const { description, title } = this.props.personalInfo;
    const { education } = this.props;
    const { renderProjects } = this.props.projOrJob;
    return (
      <div id="mainWrap">
        <Description description={description} title={title} />
        {this.state.isEducationBlank ? '' : <Education education={education} />}
        {renderProjects === 'true' ? (
          <Projects list={this.props.projects.list} />
        ) : (
          <Experience list={this.props.experience.list} />
        )}
      </div>
    );
  }
}

export default Main;
