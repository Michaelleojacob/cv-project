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
          <label>
            github:
            <input
              type="text"
              name="github"
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
              value={this.props.socials.github}
            ></input>
          </label>
          <label>
            linkedin:
            <input
              type="text"
              name="linkedin"
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
              value={this.props.socials.linkedin}
            ></input>
          </label>
          <label>
            twitter:
            <input
              type="text"
              name="twitter"
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
              value={this.props.socials.twitter}
            ></input>
          </label>
          <label>
            instagram:
            <input
              type="text"
              name="instagram"
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
              value={this.props.socials.instagram}
            ></input>
          </label>
          <label>
            facebook:
            <input
              type="text"
              name="facebook"
              onChange={(e) =>
                this.props.helpers.handleChange(e, this.parentEl)
              }
              value={this.props.socials.facebook}
            ></input>
          </label>
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
