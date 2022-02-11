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

const formatDate = (date) => {
  const splitDate = date.split('-');
  return `${splitDate[1]}/${splitDate[0]}`;
};

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.stat = {};
  }
  render() {
    const { city, degree, university, from, to } = this.props.education;
    return (
      <div id="educationWrap">
        <div className={'main-title'}>education</div>
        <div id="education-details">
          <div id="uni-plus-city">
            <div id="main-uni">{university !== '' ? university : null}</div>
            <div id="main-city">{city !== '' ? city : null}</div>
          </div>
          <div id="deg-plus-dates">
            <div id="main-deg">{degree !== '' ? `${degree}` : null}</div>
            <div id="main-date">
              {from !== '' ? `${formatDate(from)} - ` : null}
              {from !== '' && to !== '' ? formatDate(to) : null}
            </div>
          </div>
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
    const renderUlArea = () => {
      if (section.description !== '' || section.technology !== '') {
        return (
          <ul className="desc-plus-tech">
            {section.description !== '' ? (
              <li className="proj-prev-desc">{section.description}</li>
            ) : (
              ''
            )}
            {section.technology !== '' ? (
              <li className="proj-prev-tech">{section.technology}</li>
            ) : (
              ''
            )}
          </ul>
        );
      }
    };

    return (
      <div key={section.id} className={'project-preview'}>
        <div className="title-plus-sum">
          <div className="proj-prev-title">{section.title}</div>
          <div className="title-sum-divider">
            {section.title !== '' && section.briefSummary !== '' ? '|' : ''}
          </div>
          <div className="proj-prev-sum">{section.briefSummary}</div>
        </div>
        <div className="app-links">
          <div className="proj-prev-repo">{section.repo}</div>
          <div className="proj-prev-live">{section.live}</div>
        </div>
        {renderUlArea()}
      </div>
    );
  }

  render() {
    const { list } = this.props;
    return (
      <div id="project-area">
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
    const renderSummary = () => {
      if (section.summary !== '') {
        return (
          <ul className="exp-ul-wrap">
            {section.summary !== '' ? (
              <li className="exp-sumary">{section.summary}</li>
            ) : (
              ''
            )}
          </ul>
        );
      }
    };
    return (
      <div key={section.id} className={'experience-preview'}>
        <div className="exp-pos-plus-company">
          <div className="exp-prev-position">{section.position}</div>
          {section.position !== '' && section.company !== '' ? (
            <div>at</div>
          ) : (
            ''
          )}
          <div className="exp-prev-company">{section.company}</div>
        </div>
        <div className="exp-date-wrap">
          <div className="exp-prev-city">{section.city}</div>
          <div className="exp-prev-from">
            {section.from !== '' ? formatDate(section.from) : ''}
          </div>
          <div>{section.from !== '' && section.to !== '' ? '-' : ''}</div>
          <div className="exp-prev-to">
            {section.to !== '' ? formatDate(section.to) : ''}
          </div>
        </div>
        {renderSummary()}
      </div>
    );
  }
  render() {
    const { list } = this.props;
    return (
      <div className="exp-wrap">
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
