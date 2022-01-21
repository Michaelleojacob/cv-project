import React from 'react';
import uniqid from 'uniqid';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'experience';
  }

  handleChange = (e, index) => {
    const name = e.target.name;
    const allListItems = [...this.props.experience.list];
    allListItems[index][name] = e.target.value;
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: allListItems,
      parentProp: this.parentEl,
    });
  };

  handleClear = (index) => {
    const allListItems = [...this.props.experience.list];
    Object.keys(allListItems[index]).forEach((key) => {
      if (key !== 'id') {
        allListItems[index][key] = '';
      }
    });
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: allListItems,
      parentProp: this.parentEl,
    });
  };

  newItem = () => {
    const obj = {
      id: uniqid(),
      position: '',
      company: '',
      live: '',
      to: '',
      from: '',
    };

    const oldList = [...this.props.experience.list];
    const updatedList = oldList.concat(obj);

    this.props.helpers.forceChange({
      targetProp: 'list',
      value: updatedList,
      parentProp: this.parentEl,
    });
  };

  handleDelete = (index) => {
    const oldList = [...this.props.experience.list];
    const newList = oldList.filter((item, i) => {
      return i !== index;
    });
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: newList,
      parentProp: this.parentEl,
    });
  };

  renderUI = () => {
    return this.props.experience.list.map((item, i) => {
      return (
        <div key={item.id}>
          <form>
            <label>
              position:
              <input
                name="position"
                type="text"
                placeholder="position"
                value={this.props.experience.list[i].position}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              company
              <input
                name="company"
                type="text"
                placeholder="company"
                value={this.props.experience.list[i].company}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              city
              <input
                name="city"
                type="text"
                placeholder="city"
                value={this.props.experience.list[i].city}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              from
              <input
                name="from"
                type="date"
                placeholder="from"
                value={this.props.experience.list[i].from}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              to
              <input
                name="to"
                type="date"
                placeholder="to"
                value={this.props.experience.list[i].to}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <div>
              <button>save</button>
              <button type="button" onClick={() => this.handleClear(i)}>
                clear
              </button>
            </div>
          </form>
          <div>
            {i > 0 ? (
              <button type="button" onClick={() => this.handleDelete(i)}>
                delete
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>experience</h3>
        {this.props.experience.isOpen ? this.renderUI() : ''}
        <div>
          {this.props.experience.list.length < 3 &&
          this.props.experience.isOpen ? (
            <button type="button" onClick={this.newItem}>
              add
            </button>
          ) : (
            ''
          )}
        </div>
        <div>
          <button
            onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
          >
            {this.props.experience.isOpen ? 'close' : 'open'}
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
