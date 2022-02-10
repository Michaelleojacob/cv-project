import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'education';
  }

  educationOpen = () => {
    return (
      <div className="inputArea">
        <form
          className="myform"
          autoComplete="off"
          onSubmit={this.props.helpers.handleSubmit}
        >
          <input
            name="university"
            type="text"
            value={this.props.education.university}
            placeholder="university name"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <input
            name="city"
            type="text"
            value={this.props.education.city}
            placeholder="city"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>

          <input
            name="degree"
            type="text"
            value={this.props.education.degree}
            placeholder="degree"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>

          <input
            name="from"
            type="date"
            value={this.props.education.from}
            placeholder="from"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>

          <input
            name="to"
            type="date"
            value={this.props.education.to}
            placeholder="to"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
        </form>
        <div className="save-close-wrap">
          <button type="button">save</button>
          <button
            type="button"
            onClick={() => this.props.helpers.clearSection(this.parentEl)}
          >
            clear
          </button>
        </div>
        <div className="close-button">
          <button
            className="closebutton"
            onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
          >
            close
          </button>
        </div>
      </div>
    );
  };

  educationClosed = () => {
    return (
      <div className="open-btn">
        <button
          className="open-btn"
          onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
        >
          open
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3 className="section-title">Education</h3>
        {this.props.education.isOpen
          ? this.educationOpen()
          : this.educationClosed()}
      </div>
    );
  }
}

export default Education;
