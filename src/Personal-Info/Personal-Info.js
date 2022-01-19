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
    this.handleTimer();
  };

  RenderInputarea = () => {
    return (
      <div>
        <div>{this.state.tooltip}</div>
        <form onSubmit={this.props.helpers.handleSubmit} autoComplete="off">
          <input
            autoComplete="off"
            type="text"
            name="firstName"
            value={this.props.personalInfo.firstName}
            placeholder="first name"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.props.personalInfo.lastName}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="title"
            placeholder="title"
            value={this.props.personalInfo.title}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="file"
            name="photo"
            placeholder="photo"
            value={this.props.personalInfo.photo}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="address"
            placeholder="address"
            value={this.props.personalInfo.address}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            value={this.props.personalInfo.phoneNumber}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="email"
            placeholder="email"
            value={this.props.personalInfo.email}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            name="description"
            placeholder="description"
            value={this.props.personalInfo.description}
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <div>
            <button type="button" onClick={(e) => this.handleSave(e)}>
              save
            </button>
            <button
              type="button"
              onClick={() => this.props.helpers.clearSection(this.parentEl)}
            >
              clear
            </button>
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
