import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changePInfoState = this.props.changePInfoState;
  }

  DontRenderInputArea = () => (
    <button onClick={this.changePInfoState}>open</button>
  );

  RenderInputarea = () => {
    const parentEl = 'personalInfo';
    return (
      <div>
        <span>{this.props.firstName}</span>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            first name:
            <input
              type="text"
              name="firstName"
              thing1="lol"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.firstName}
            ></input>
          </label>
          <label>
            last name:
            <input
              type="text"
              name="lastName"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.lastName}
            ></input>
          </label>
          <label>
            title:
            <input
              type="text"
              name="title"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.title}
            ></input>
          </label>
          <label>
            photo:
            <input
              type="file"
              name="photo"
              onChange={(e) => this.props.handleChange(e, parentEl)}
            ></input>
          </label>
          <label>
            address:
            <input
              type="text"
              name="address"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.address}
            ></input>
          </label>
          <label>
            phone number:
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.phoneNumber}
            ></input>
          </label>
          <label>
            email:
            <input
              type="text"
              name="email"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.email}
            ></input>
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              onChange={(e) => this.props.handleChange(e, parentEl)}
              value={this.props.personalInfo.description}
            ></input>
          </label>
          <div>
            <button type="submit">submit</button>
            <button type="clear">clear</button>
          </div>
        </form>
        <button onClick={this.changePInfoState}>close</button>
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
