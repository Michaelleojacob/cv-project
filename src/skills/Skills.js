import React from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: '',
    };
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
    if (this.props.skills.list.length > 5) {
      return this.setState({
        tooltip: 'too many skills',
      });
    }
    if (this.props.skills.placeholderValue === '') {
      return this.setState({
        tooltip: `can't be empty`,
      });
    }
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

  deleteSkill = (itemToDelete) => {
    const arr = this.props.skills.list;
    const filteredArr = arr.filter((item, index) => index !== itemToDelete);
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: filteredArr,
      parentProp: this.parentEl,
    });
  };

  handleClearAll = () => {
    this.clearInputValue();
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: [],
      parentProp: this.parentEl,
    });
    this.setState({
      tooltip: 'cleared skills',
    });
  };

  skillsIsOpen = () => {
    return (
      <div>
        <div>{this.state.tooltip}</div>
        <form onSubmit={this.handleSaveSkill} autoComplete="off">
          <input
            name="placeholderValue"
            value={this.props.skills.placeholderValue}
            placeholder="add a new skill"
            onChange={(e) => this.props.helpers.handleChange(e, this.parentEl)}
          ></input>
          <button type="submit">save</button>
          <button type="button" onClick={this.handleClearAll}>
            clear all skills
          </button>
        </form>
        {this.props.skills.list.map((item, index) => {
          return (
            <div key={item.id} onClick={() => this.deleteSkill(index)}>
              {item.text}
              <span>X</span>
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
        <h3>Skills</h3>
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

// this was in App initially, moved the logic to this file and used forceChange instead.
// deleteSkill = (itemToDelete) => {
//   const arr = [...this.state.skills.list];
//   const filteredArr = arr.filter((item, index) => index !== itemToDelete);
//   this.setState((prevState) => ({
//     ...prevState,
//     skills: {
//       ...prevState.skills,
//       list: filteredArr,
//     },
//   }));
// };
