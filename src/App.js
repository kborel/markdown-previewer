import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

import InputArea from './components/input-area';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      markup: ''
    }
  }

  markupText = (value) => {
    this.setState({
      value: value
    });
  };

  createMarkup = () => {
    return {__html: marked(this.state.value)};
  };

  render() {
    return (
      <div className="row">
        <InputArea 
          className="col-md-6"
          value={this.state.value}
          onTextChange={(value) => this.markupText(value)}
        />
        <div 
          className="col-md-6"
          dangerouslySetInnerHTML={this.createMarkup()}/>
      </div>
    );
  }
}

export default App;
