import React, { Component } from 'react';
import PersonalInfo from './Personal-Info/Personal-Info';
import Socials from './socials/Socials';

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
        isOpen: false,
        github: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        facebook: '',
      },
      skills: {
        isOpen: false,
      },
      projects: {
        isOpen: false,
      },
      experience: {
        isOpen: false,
      },
      education: {
        isOpen: false,
      },
      helpers: {
        handleIsOpen: this.handleIsOpen,
        handleChange: this.handleChange,
        forceChange: this.forceChange,
        handleSubmit: this.handleSubmit,
      },
    };
  }

  closeAllOpenForms = () => {
    Object.keys(this.state).forEach((key) => {
      if (key !== 'helpers') {
        this.setState((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            isOpen: false,
          },
        }));
      }
    });
  };

  handleIsOpen = (parentEl) => {
    this.closeAllOpenForms();
    this.setState((prevState) => ({
      ...prevState,
      [parentEl]: {
        ...prevState[parentEl],
        isOpen: !this.state[parentEl].isOpen,
      },
    }));
  };

  handleChange = (e, parentProp) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [parentProp]: {
        ...prevState[parentProp],
        [name]: value,
      },
    }));

    console.log(this.state[parentProp]);
  };

  forceChange = ({ targetProp, value, parentProp }) => {
    this.setState((prevState) => ({
      ...prevState,
      [parentProp]: {
        ...prevState[parentProp],
        [targetProp]: value,
      },
    }));
  };

  handleSubmit = (e) => e.preventDefault();

  render() {
    return (
      <div>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          helpers={this.state.helpers}
        />
        <Socials socials={this.state.socials} helpers={this.state.helpers} />
      </div>
    );
  }
}

export default App;
