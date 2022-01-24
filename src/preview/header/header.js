import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { firstName, lastName, title } = this.props.personalInfo;
    return (
      <div id="headerWrap">
        <div id="dummy"></div>
        <div id="nameWrap">
          {firstName !== '' ? firstName : 'Jane'}{' '}
          {lastName !== '' ? lastName : 'Doe'}
        </div>
        <div id="titleWrap">{title !== '' ? title : 'Software Developer'}</div>
      </div>
    );
  }
}
export default Header;
