import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header className="header mdl-layout__header">
        <div className="mdl-layout__header-row">
          <h1 className="mdl-layout-title">todos</h1>
        </div>
        <div className="mdl-grid">
          <TodoTextInput
            newTodo
            onSave={this.handleSave}
            placeholder="What needs to be done?"
          />
        </div>
      </header>
    );
  }
}
