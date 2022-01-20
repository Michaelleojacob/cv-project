import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'projects';
  }

  projectsOpen = () => {
    return (
      <div>
        <div>projects open</div>
        <button onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}>
          close
        </button>
      </div>
    );
  };

  projectsClosed = () => {
    return (
      <div>
        <button onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}>
          open
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>Projects</h3>
        {this.props.projects.isOpen
          ? this.projectsOpen()
          : this.projectsClosed()}
      </div>
    );
  }
}

export default Projects;
