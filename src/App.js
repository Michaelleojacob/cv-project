import React, { Component } from 'react';
import PersonalInfo from './Personal-Info/Personal-Info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        isOpen: true,
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      socials: {
        github: '',
        linkedin: '',
      },
      skills: {},
      experience: {},
      education: {},
    };
  }

  handleIsOpen = (parentEl) => {
    this.setState((prevState) => ({
      ...prevState,
      [parentEl]: {
        ...prevState[parentEl],
        isOpen: !this.state[parentEl].isOpen,
      },
    }));
  };

  handleChange = (e, parentEl) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [parentEl]: {
        ...prevState[parentEl],
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => e.preventDefault();

  render() {
    return (
      <div>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          handleIsOpen={this.handleIsOpen}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
