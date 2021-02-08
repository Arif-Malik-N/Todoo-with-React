import React from 'react';

import Todoo from './todoo';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
     
      <Todoo/>
    </div> );
  }
}
 
export default App;