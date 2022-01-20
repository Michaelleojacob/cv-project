import React, { Component } from 'react';
import PersonalInfo from './Personal-Info/Personal-Info';
import Socials from './socials/Socials';
import Skills from './skills/Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        isOpen: false,
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
        isOpen: true,
        placeholderValue: '',
        list: [],
        deleteSkill: this.deleteSkill,
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
        clearSection: this.clearSection,
      },
    };
  }

  closeAllOpenForms = () => {
    Object.keys(this.state).forEach((key) => {
      if (this.state[key].hasOwnProperty('isOpen')) {
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

  clearSection = (parentProp) => {
    Object.keys(this.state[parentProp]).forEach((key) => {
      if (key !== 'isOpen') {
        this.setState((prevState) => ({
          ...prevState,
          [parentProp]: {
            ...prevState[parentProp],
            [key]: '',
          },
        }));
      }
    });
  };

  deleteSkill = (itemToDelete) => {
    const arr = [...this.state.skills.list];
    const filteredArr = arr.filter((item, index) => index !== itemToDelete);
    this.setState((prevState) => ({
      ...prevState,
      skills: {
        ...prevState.skills,
        list: filteredArr,
      },
    }));
  };

  render() {
    return (
      <div>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          helpers={this.state.helpers}
        />
        <Socials socials={this.state.socials} helpers={this.state.helpers} />
        <Skills skills={this.state.skills} helpers={this.state.helpers} />
      </div>
    );
  }
}

export default App;
