import React, { Component } from 'react';

class Socials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'socials';
  }

  SocialsAreOpen = () => {
    return (
      <div>
        <form onSubmit={this.props.helpers.handleSubmit} autoComplete="off">
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
        <button onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}>
          close
        </button>
        <button onClick={() => this.props.helpers.clearSection}>clear</button>
      </div>
    );
  };

  SocialsAreClosed = () => {
    return (
      <div>
        <button onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}>
          open
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>Socials</h3>
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
