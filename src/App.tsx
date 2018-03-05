import * as React from 'react';
import './App.css';
import demo from './fluent/demo';

class App extends React.Component {
  componentDidMount() {
    demo();
  }
  render() {
    return null;
  }
}

export default App;
