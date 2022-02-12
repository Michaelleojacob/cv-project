import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

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
      <div id="sb-socials-component">
        <div id="social-title">social media</div>
        <div id="githubWrap">
          {github !== '' ? (
            <div className="mediaWrap">
              <FontAwesomeIcon className="sb-icon" icon={faGithub} />
              {github}
            </div>
          ) : (
            ''
          )}
        </div>
        <div id="linkedinWrap">
          {linkedin !== '' ? (
            <div className="mediaWrap">
              <FontAwesomeIcon className="sb-icon" icon={faLinkedin} />
              {linkedin}
            </div>
          ) : (
            ''
          )}
        </div>
        <div id="twitterWrap">
          {twitter !== '' ? (
            <div className="mediaWrap">
              <FontAwesomeIcon className="sb-icon" icon={faTwitter} />
              {twitter}
            </div>
          ) : (
            ''
          )}
        </div>
        <div id="facebookWrap">
          {facebook !== '' ? (
            <div className="mediaWrap">
              <FontAwesomeIcon className="sb-icon" icon={faFacebook} />
              {facebook}
            </div>
          ) : (
            ''
          )}
        </div>
        <div id="instagramWrap">
          {instagram !== '' ? (
            <div className="mediaWrap">
              <FontAwesomeIcon className="sb-icon" icon={faInstagram} />
              {instagram}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkIfListIsEmpty = () => {
    if (this.props.skills.list.length === 0) return true;
  };

  render() {
    const { list, fakeList } = this.props.skills;
    const check = this.checkIfListIsEmpty();
    return (
      <div id="sb-skills-component">
        <div id="skills-title">skills</div>

        {check ? (
          <div id="eachSkill">
            {fakeList.map((item) => {
              return <div key={uniqid()}>{item}</div>;
            })}
          </div>
        ) : (
          <div id="eachSkill">
            {list.map((item) => {
              return <div key={item.id}>{item.text}</div>;
            })}
          </div>
        )}
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
