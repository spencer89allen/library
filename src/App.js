import React, { Component } from 'react';

import './App.css'
import routes from '/Users/spencerallen/projects/library/src/routes.js';


class App extends Component {
  render() {
    return (
      <div>
        { routes }
      </div>
    );
  }
}

export default App;
