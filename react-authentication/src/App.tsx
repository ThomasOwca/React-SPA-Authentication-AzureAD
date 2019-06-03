import React from 'react';
import './App.css';
import Form from "./Form";
import adalContext from './adalConfig';

class App extends React.Component<any> {

  constructor(props: any) {
    super(props);

    
  }

  getUser() {
    let user = adalContext.AuthContext.getCachedUser();
    return adalContext.AuthContext.getCachedUser();
  }


  render() {
    return (
      <div className="App">
        <label>{this.getUser()}</label>
        <Form text="Hello" age={22} name="Thomas"/> 
      </div>
    );
  }
}

export default App;
