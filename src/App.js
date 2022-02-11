import React, { Component } from 'react';
import uniqid from 'uniqid';
import InputArea from './inputArea/inputArea';
import Preview from './preview/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        isOpen: false,
        firstName: '',
        lastName: '',
        title: '',
        // photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      socials: {
        isOpen: false,
        personal: '',
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
      projOrJob: {
        renderProjects: 'false',
      },
      projects: {
        isOpen: false,
        list: [
          {
            id: uniqid(),
            title: '',
            repo: '',
            live: '',
            briefSummary: '',
            description: '',
            technology: '',
          },
        ],
      },
      experience: {
        isOpen: true,
        list: [
          {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            summary: '',
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
      <div id="appWrap">
        <InputArea allInfo={this.state} />
        <Preview allInfo={this.state} />
      </div>
    );
  }
}

export default App;
