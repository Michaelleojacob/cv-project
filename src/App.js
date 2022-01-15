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

  changePInfoState = () => {
    const personalInfo = { ...this.state.personalInfo };
    personalInfo.isOpen = !this.state.personalInfo.isOpen;
    this.setState({ personalInfo });
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    return 'hi';
  };

  render() {
    return (
      <div>
        <PersonalInfo
          pInfoObj={this.state.personalInfo}
          changePInfoState={this.changePInfoState}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
