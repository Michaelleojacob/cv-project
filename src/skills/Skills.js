import React from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'skills';
  }

  clearInputValue = () => {
    this.props.helpers.forceChange({
      targetProp: 'placeholderValue',
      value: '',
      parentProp: this.parentEl,
    });
  };

  handleSaveSkill = (e) => {
    e.preventDefault();
    const arr = this.props.skills.list;
    arr.push({
      text: this.props.skills.placeholderValue,
      id: uniqid(),
    });
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: arr,
      parentProp: this.parentEl,
    });
    this.clearInputValue();
  };

  handleClick = (itemid) => {
    console.log(itemid);
  };

  skillsIsOpen = () => {
    return (
      <div>
        <form onSubmit={this.handleSaveSkill} autoComplete="off">
          <input
            name="placeholderValue"
            value={this.props.skills.placeholderValue}
            placeholder="add a new skill"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <button>save</button>
        </form>
        {this.props.skills.list.map((item) => {
          return (
            <div key={item.id} onClick={(e) => this.handleClick(item.id)}>
              {item.text}
            </div>
          );
        })}
        <button onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}>
          close
        </button>
      </div>
    );
  };

  skillsIsClosed = () => {
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
        <h2>Skills</h2>
        <div>
          {this.props.skills.isOpen
            ? this.skillsIsOpen()
            : this.skillsIsClosed()}
        </div>
      </div>
    );
  }
}

export default Skills;
