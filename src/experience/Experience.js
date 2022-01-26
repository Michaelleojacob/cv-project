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
        <div key={item.id} className="inputArea">
          <form className="myform">
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
            <div>
              <span>responsibilities</span>
              <textarea
                name="summary"
                autoCorrect="on"
                placeholder="responsibilities, description or summary of the job"
                value={this.props.experience.list[i].summary}
                onChange={(e) => this.handleChange(e, i)}
              ></textarea>
            </div>
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
            <div className="save-close-wrap">
              <button>save</button>
              <button type="button" onClick={() => this.handleClear(i)}>
                clear
              </button>
            </div>
          </form>
          <div>
            {i > 0 ? (
              <div className="del-section">
                <button
                  className="del-section"
                  type="button"
                  onClick={() => this.handleDelete(i)}
                >
                  delete
                </button>
              </div>
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
        <h3 className="section-title">Experience</h3>
        {this.props.experience.isOpen ? this.renderUI() : ''}
        <div>
          {this.props.experience.list.length < 3 &&
          this.props.experience.isOpen ? (
            <div className="add-btn-wrap">
              <button className="add-btn" type="button" onClick={this.newItem}>
                add
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="open-btn">
          <button
            className="open-btn"
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
