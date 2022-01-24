import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { address, phoneNumber, email } = this.props.personalInfo;
    return (
      <div id="sb-contact-component">
        <div id="contact-title">contact me</div>
        <div id="addressWrap">
          <div>Address:</div>
          <div>{address !== '' ? address : '1234 dev rd'}</div>
        </div>

        <div id="phoneWrap">
          <div>phone number:</div>
          <div>{phoneNumber !== '' ? phoneNumber : '123-456-7891'}</div>
        </div>

        <div id="emailWrap">
          <div>email:</div>
          <div>{email !== '' ? email : 'janedoe@gmail.com'}</div>
        </div>
      </div>
    );
  }
}

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { github, linkedin, twitter, facebook, instagram } =
      this.props.socials;
    return (
      <div>
        <div>social media</div>
        <FontAwesomeIcon icon={faGithub} />
        {github !== '' ? <div>{github}</div> : ''}
      </div>
    );
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = this.props.skills;
    return (
      <div>
        <div>hi</div>
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { personalInfo, socials, skills } = this.props;
    return (
      <div id="sidebarWrap">
        <div id="sb-contact">
          <Contact personalInfo={personalInfo} />
        </div>
        <div id="sb-socials">
          <Socials socials={socials} />
        </div>
        <div id="sb-skills">
          <Skills skills={skills} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
