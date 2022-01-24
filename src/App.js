import React, { Component } from 'react';
import PersonalInfo from './Personal-Info/Personal-Info';
import Socials from './socials/Socials';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Education from './education/Education';
import Experience from './experience/Experience';
import Preview from './preview/Preview';
import uniqid from 'uniqid';

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
        placeholderValue: '',
        list: [],
        deleteSkill: this.deleteSkill,
      },
      projects: {
        isOpen: false,
        list: [
          {
            id: uniqid(),
            title: '',
            repo: '',
            live: '',
            description: '',
            highlights: '',
            tech: '',
          },
        ],
      },
      experience: {
        isOpen: false,
        list: [
          {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
          },
        ],
      },
      education: {
        isOpen: false,
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
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

  render() {
    return (
      <div>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          helpers={this.state.helpers}
        />
        <Socials socials={this.state.socials} helpers={this.state.helpers} />
        <Skills skills={this.state.skills} helpers={this.state.helpers} />
        <Education
          education={this.state.education}
          helpers={this.state.helpers}
        />
        <Projects projects={this.state.projects} helpers={this.state.helpers} />
        <Experience
          experience={this.state.experience}
          helpers={this.state.helpers}
        />
        <Preview allInfo={this.state} />
      </div>
    );
  }
}

export default App;
