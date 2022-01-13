import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changePInfoState = this.props.changePInfoState;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  renderBasedOnOpenOrClosedState = (e) => {
    console.log('hi from renderbased');
  };

  DontRenderInputArea = () => (
    <button onClick={this.changePInfoState}>open</button>
  );

  RenderInputarea = () => {
    return (
      <div>
        <h3>Personal Information</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            first name:
            <input type="text" name="fname"></input>
          </label>
          <label>
            last name:
            <input type="text" name="lname"></input>
          </label>
          <label>
            title:
            <input type="text" name="title"></input>
          </label>
          <label>
            photo:
            <input type="text" name="photo"></input>
          </label>
          <label>
            address:
            <input type="text" name="address"></input>
          </label>
          <label>
            phone number:
            <input type="text" name="phoneNumber"></input>
          </label>
          <label>
            email:
            <input type="text" name="email"></input>
          </label>
          <label>
            description:
            <input type="text" name="description"></input>
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
    const { isOpen } = this.props.pInfoObj;
    const RenderInputarea = this.RenderInputarea;
    const DontRenderInputArea = this.DontRenderInputArea;
    return (
      <div>
        <h3>Personal Information</h3>
        <div>{isOpen ? <RenderInputarea /> : <DontRenderInputArea />}</div>
      </div>
    );
  }
}

export default PersonalInfo;
