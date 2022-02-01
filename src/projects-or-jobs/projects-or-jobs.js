import React from 'react';

class ProjectsOrJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'projOrJob';
  }

  render() {
    const { handleChange, handleSubmit } = this.props.helpers;
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
              onChange={(e) => handleChange(e, this.parentEl)}
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
