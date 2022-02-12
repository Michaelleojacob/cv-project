import React from 'react';

class ProjectsOrJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'projOrJob';
  }

  handleChangeAndIsOpen = (e) => {
    const { handleChange, handleIsOpen } = this.props.helpers;
    const projOrExp = e.target.value;
    handleChange(e, this.parentEl);
    switch (projOrExp) {
      case 'true':
        handleIsOpen('projects');
        break;
      case 'false':
        handleIsOpen('experience');
        break;
      default:
        break;
    }
  };

  render() {
    const { handleSubmit } = this.props.helpers;
    const { renderProjects } = this.props.projOrJob;
    return (
      <div>
        <div id="proj-or-jobs-wrap">
          <form className="myform" onSubmit={handleSubmit}>
            <div id="select-question">
              Would you like to focus on projects or job experience?
            </div>
            <select
              name="renderProjects"
              value={renderProjects}
              id="make-selection"
              onChange={this.handleChangeAndIsOpen}
            >
              <option value={'true'}>projects</option>
              <option value={'false'}>experience</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectsOrJobs;
