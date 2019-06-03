import React from 'react';
import Passenger from './Classes/Passenger';

export default class Form extends React.Component<any, any> {
  // ***********************************************************
  // This is a good approach but the function will be re-created 
  // each time the component is re-rendered.
  // ***********************************************************
  
  /*constructor(props: any) {
    super(props);

    this.state = {
      title: "Enter a new name here",
      description: "Hola",
      textInput: null,
      name: this.props.name
    };
  }

  updateText() {
    this.setState({
      name: this.state.textInput,
      textInput: ""
    });
  }

  handleChange(e: any) {
    this.setState({ textInput: e.target.value})
  }


  render() {
    return (
      <div className="App">
        <div>{this.props.text} {this.state.name}</div>
        <div>{this.state.age}</div>
        <input type="text" placeholder={this.state.title} value={this.state.textInput} onChange={(e) => this.handleChange(e)}/>
        <br />
        <button type="submit" onClick={() => this.updateText()}>Submit</button>
      </div>
    );
  }*/

  // ***********************************************************
  // This is probably the better approach since the functions
  // are not re-created every time the component needs to 
  // re-render
  // ***********************************************************
  /*constructor(props: any) {
    super(props);

    this.state = {
      title: "Enter a new name here",
      description: "Hola",
      textInput: null,
      name: this.props.name
    };
  }

  updateText = () => {
    this.setState({
      name: this.state.textInput,
      textInput: ""
    });
  }

  handleChange = (event: any) => {
    this.setState({
      textInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>{this.props.text} {this.state.name}</div>
        <div>{this.state.age}</div>
        <input type="text" placeholder={this.state.title} onChange={this.handleChange} value={this.state.textInput} />
        <br />
        <button type="submit" onClick={this.updateText}>Submit</button>
      </div>
    );
  }*/

  constructor(props: any) {
    super(props);

    this.state = {
      title: "Enter a new name here",
      description: "Hola",
      textInput: null,
      firstName: "",
      lastName: "",
      selectedClass: "Select A Class"
    };
  }

  handleChangeFirstName = (event: any) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeLastName = (event: any) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleChangeDropDown = (event: any) => {
    this.setState({
      selectedClass: event.target.value
    });
  }

  submitForm = (event: any) => {
    if (this.state.selectedClass === "Select A Class") {
      alert("Invalid class was selected!\n Try again!");
      event.preventDefault();
    }
    else {
      let flyer = new Passenger(this.state.firstName, this.state.lastName);
      alert("Thanks " + this.state.firstName + " " + this.state.lastName + " your class is " + this.state.selectedClass);
      flyer.sayHello();

    }
  }

  render() {
    return (
      <div className="App">
        <div>{this.props.text} {this.state.firstName} {this.state.lastName}</div>
        <div>{this.state.age}</div>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter First Name" onChange={this.handleChangeFirstName} value={this.state.textInput} />
          <input type="text" placeholder="Enter Last Name" onChange={this.handleChangeLastName} value={this.state.textInput} />
          <select onChange={this.handleChangeDropDown} value={this.state.selectedClass}>
            <option>Select A Class</option>
            <option>Economy</option>
            <option>First Class</option>
            <option>Business Class</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
