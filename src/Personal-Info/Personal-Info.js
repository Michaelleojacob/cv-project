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
    <div className="open-btn">
      <button
        className="open-btn"
        type="button"
        onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
      >
        open
      </button>
    </div>
  );

  RenderInputarea = () => {
    return (
      <div id={'pinfo-input-area'} className={'inputArea'}>
        <div>{this.state.tooltip}</div>
        <form
          className="myform"
          onSubmit={this.props.helpers.handleSubmit}
          autoComplete="off"
        >
          <div>
            <label>
              first name
              <input
                autoComplete="off"
                type="text"
                name="firstName"
                value={this.props.personalInfo.firstName}
                placeholder="first name"
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              last name
              <input
                autoComplete="off"
                type="text"
                name="lastName"
                placeholder="last name"
                value={this.props.personalInfo.lastName}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              title
              <input
                autoComplete="off"
                type="text"
                name="title"
                placeholder="title"
                value={this.props.personalInfo.title}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              image
              <input
                autoComplete="off"
                type="file"
                name="photo"
                placeholder="photo"
                value={this.props.personalInfo.photo}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              address
              <input
                autoComplete="off"
                type="text"
                name="address"
                placeholder="address"
                value={this.props.personalInfo.address}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              phone number
              <input
                autoComplete="off"
                type="text"
                name="phoneNumber"
                placeholder="phone number"
                value={this.props.personalInfo.phoneNumber}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              email
              <input
                autoComplete="off"
                type="text"
                name="email"
                placeholder="email"
                value={this.props.personalInfo.email}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></input>
            </label>
          </div>
          <div>
            {/* //*  make this a textarea */}
            <label>
              description
              <textarea
                name="description"
                placeholder="description or summary about yourself"
                value={this.props.personalInfo.description}
                onChange={(e) =>
                  this.props.helpers.handleChange(e, this.parentEl)
                }
              ></textarea>
            </label>
            {/* //*  make this a textarea */}
          </div>
          <div className="save-close-wrap">
            <button
              type="button"
              onClick={(e) => this.props.helpers.handleSubmit(e)}
            >
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
        <div className="close-button">
          <button
            className="closebutton"
            type="button"
            onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
          >
            close
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3 className="section-title" id="pinfo-title">
          Personal Information
        </h3>
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
