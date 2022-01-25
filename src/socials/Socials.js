import React, { Component } from 'react';

class Socials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'socials';
  }

  SocialsAreOpen = () => {
    return (
      <div className="inputArea">
        <form
          className="myform"
          onSubmit={this.props.helpers.handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="github"
            placeholder="github"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
            value={this.props.socials.github}
          ></input>

          <input
            type="text"
            name="linkedin"
            placeholder="linkedin"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
            value={this.props.socials.linkedin}
          ></input>

          <input
            type="text"
            name="twitter"
            placeholder="twitter"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
            value={this.props.socials.twitter}
          ></input>

          <input
            type="text"
            name="instagram"
            placeholder="instagram"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
            value={this.props.socials.instagram}
          ></input>

          <input
            type="text"
            name="facebook"
            placeholder="facebook"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
            value={this.props.socials.facebook}
          ></input>
        </form>
        <div className="save-close-wrap">
          <button>save</button>
          <button
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

  SocialsAreClosed = () => {
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
        <h3 className="section-title">Socials</h3>
        <div>
          {this.props.socials.isOpen
            ? this.SocialsAreOpen()
            : this.SocialsAreClosed()}
        </div>
      </div>
    );
  }
}

export default Socials;
