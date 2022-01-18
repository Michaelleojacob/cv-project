import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: '',
      timer: 0,
    };
    this.parentEl = 'personalInfo';
  }

  DontRenderInputArea = () => (
    <button
      type="button"
      onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
    >
      open
    </button>
  );

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      tooltip: 'your progress has been saved.',
    });
    setTimeout(() => {
      this.setState({
        tooltip: '',
      });
    }, 3000);
  };

  RenderInputarea = () => {
    // console.log(this.props.personalInfo);
    return (
      <div>
        <div>{this.state.tooltip}</div>
        <form onSubmit={this.props.helpers.handleSubmit} autoComplete="off">
          <label>
            first name:
            <input
              autoComplete="off"
              type="text"
              name="firstName"
              value={this.props.personalInfo.firstName}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            last name:
            <input
              autoComplete="off"
              type="text"
              name="lastName"
              value={this.props.personalInfo.lastName}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            title:
            <input
              autoComplete="off"
              type="text"
              name="title"
              value={this.props.personalInfo.title}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            photo:
            <input
              autoComplete="off"
              type="file"
              name="photo"
              value={this.props.personalInfo.photo}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            address:
            <input
              autoComplete="off"
              type="text"
              name="address"
              value={this.props.personalInfo.address}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            phone number:
            <input
              autoComplete="off"
              type="text"
              name="phoneNumber"
              value={this.props.personalInfo.phoneNumber}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            email:
            <input
              autoComplete="off"
              type="text"
              name="email"
              value={this.props.personalInfo.email}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <label>
            description:
            <input
              autoComplete="off"
              type="text"
              name="description"
              value={this.props.personalInfo.description}
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
            ></input>
          </label>
          <div>
            <button
              type="button"
              onClick={(e) => this.props.helpers.handleSubmit(e)}
            >
              save
            </button>
            <button type="button">clear</button>
          </div>
        </form>
        <button
          type="button"
          onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
        >
          close
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <div>
          {this.props.personalInfo.isOpen
            ? this.RenderInputarea()
            : this.DontRenderInputArea()}
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
