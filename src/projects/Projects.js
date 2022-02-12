import React from 'react';
import uniqid from 'uniqid';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentEl = 'projects';
  }

  handleChange = (e, index) => {
    const name = e.target.name;
    const allListItems = [...this.props.projects.list];
    allListItems[index][name] = e.target.value;
    this.props.helpers.forceChange({
      targetProp: 'list',
      value: allListItems,
      parentProp: this.parentEl,
    });
  };

  handleClear = (index) => {
    const allListItems = [...this.props.projects.list];
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
      title: '',
      repo: '',
      live: '',
      briefSummary: '',
      description: '',
      technology: '',
    };

    const oldList = [...this.props.projects.list];
    const updatedList = oldList.concat(obj);

    this.props.helpers.forceChange({
      targetProp: 'list',
      value: updatedList,
      parentProp: this.parentEl,
    });
  };

  handleDelete = (index) => {
    const oldList = [...this.props.projects.list];
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
    return this.props.projects.list.map((item, i) => {
      return (
        <div key={item.id} className="inputArea">
          <form className="myform" onSubmit={this.props.helpers.handleSubmit}>
            <label>
              app title:
              <input
                name="title"
                type="text"
                placeholder="app title"
                value={this.props.projects.list[i].title}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              repo link
              <input
                name="repo"
                type="text"
                placeholder="repo link"
                value={this.props.projects.list[i].repo}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              live link
              <input
                name="live"
                type="text"
                placeholder="live link"
                value={this.props.projects.list[i].live}
                onChange={(e) => this.handleChange(e, i)}
              ></input>
            </label>
            <label>
              app Summary
              <textarea
                name="briefSummary"
                placeholder="app summary"
                value={this.props.projects.list[i].briefSummary}
                onChange={(e) => this.handleChange(e, i)}
              ></textarea>
            </label>
            <label>
              description
              <textarea
                name="description"
                placeholder="description"
                value={this.props.projects.list[i].description}
                onChange={(e) => this.handleChange(e, i)}
              ></textarea>
            </label>
            <label>
              technology used
              <textarea
                name="technology"
                placeholder="technology used"
                value={this.props.projects.list[i].technology}
                onChange={(e) => this.handleChange(e, i)}
              ></textarea>
            </label>
            <div className="save-close-wrap">
              <button onClick={this.props.helpers.handleSubmit}>save</button>
              <button type="button" onClick={() => this.handleClear(i)}>
                clear
              </button>
            </div>
          </form>
          <div>
            {i > 0 ? (
              <div className={'del-section'}>
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
      <div id="inp-prog-wrap">
        <h3 className="section-title">Projects</h3>
        {this.props.projects.isOpen ? this.renderUI() : ''}
        <div>
          {this.props.projects.list.length < 3 && this.props.projects.isOpen ? (
            <div className="add-btn-wrap">
              <button className="add-btn" type="button" onClick={this.newItem}>
                add
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="close-button">
          <button
            className="closebutton"
            onClick={() => this.props.helpers.handleIsOpen(this.parentEl)}
          >
            {this.props.projects.isOpen ? 'close' : 'open'}
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
