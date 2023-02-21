import React from "react";

class InputState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test Default",
      time: 0
    };
  }

  changeName = (e) => {
    this.setState({ name: e }, () => {
      console.log(this.state);
    });
  };
  // It will  run before the creation of the component
  componentWillMount() 
  { 

      console.log("componentWillMount()"); 
  } 
  // It will run on the creation of the component
  componentDidMount() 
  { 
      console.log("componentDidMount()"); 
  } 
  // It will run before the update of the component
  componentWillUpdate() 
  { 
      console.log("componentWillUpdate()"); 
  } 
//It will run on the update of the component
  componentDidUpdate() 
  { 
    setInterval(() => {
      this.setState({time: this.state.time+1})
      
    }, 1000);
      console.log("componentDidUpdate()"); 
  } 

 static getDerivedStateFromProps() {

  console.log("getDerivedStateFromProps()"); 


  }
  //It will run on the destruction of the component

  componentWillUnmount(){
    console.log("componentWillUnmount()"); 

  }


  render() {
    return (
      <>
        <center>
          <input onChange={(e) => this.changeName(e.target.value)} placeholder="test" />
          <h1>{this.state.name}</h1>
          <h3>{this.state.time}</h3>

        </center>
      </>
    );
  }
}

export default InputState;
