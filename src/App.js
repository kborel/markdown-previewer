import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  markupText = text =>
    this.setState({
      text,
    });

  createMarkup = () => {
    return {__html: marked(this.state.text)};
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="content">
          <textarea
            placeholder="Enter markdown here..."
            value={this.state.text}
            className="input" 
            onChange={event => this.markupText(event.target.value)}
          />
          <div
            className="output" 
            dangerouslySetInnerHTML={this.createMarkup()}
          />
        </div>
      </div>
    );
  }
}

export default App;
