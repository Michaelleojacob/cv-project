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
      <div id="proj-or-jobs-wrap">
        <form className="myform" onSubmit={handleSubmit}>
          <label>
            {' '}
            Would you like to create your resume using projects or job
            experience?
            <select
              name="renderProjects"
              value={renderProjects}
              onChange={(e) => handleChange(e, this.parentEl)}
            >
              <option value={'true'}>projects</option>
              <option value={'false'}>experience</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ProjectsOrJobs;
