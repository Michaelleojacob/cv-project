import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Socials extends React.Component {
  handleClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  render() {
    return (
      <div id="my-socials">
        <div id="my-email">
          <div id="my-email-wrap">
            <div className="wm-icon">
              <FontAwesomeIcon
                className="watermark-icon svg"
                icon={faCopyright}
              />{' '}
            </div>
            <div>michaelleojacob@gmail.com</div>
          </div>
        </div>

        <div id="michael-socials">
          <div
            id="github-link"
            className="link-event"
            onClick={(e) =>
              this.handleClick(e, 'https://github.com/Michaelleojacob')
            }
          >
            <FontAwesomeIcon className="watermark-icon" icon={faGithub} />{' '}
            github
          </div>
          <div
            id="linkedin-link"
            className="link-event"
            onClick={(e) =>
              this.handleClick(
                e,
                'https://www.linkedin.com/in/michael-leo-jacob',
              )
            }
          >
            <FontAwesomeIcon className="watermark-icon" icon={faLinkedin} />{' '}
            linkedin
          </div>
          <div
            id="repo-link"
            className="link-event"
            onClick={(e) =>
              this.handleClick(
                e,
                'https://github.com/Michaelleojacob/cv-project',
              )
            }
          >
            <FontAwesomeIcon className="watermark-icon" icon={faCode} /> repo
          </div>
        </div>
      </div>
    );
  }
}

class Watermark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="watermark-header">
        <div id="watermark-spacing"></div>
        <div id="my-title">
          <div id="watermark-title">CV App</div>
        </div>
        <Socials />
      </div>
    );
  }
}

export default Watermark;
