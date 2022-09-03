import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

class SecCounter extends React.Component {
  constructor() {
    console.log("Construcor");
    super();
    this.state = { count: 0, timer: 0, intervall: null };
  }

  //-------------------- State LifeCycle ------------------------

  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }
  //------------------- Button Functions ------------------------

  Increase = () => {
    console.log("Increase" + this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  Decrease = () => {
    console.log("Decrease" + this.state.count);
    this.setState({ count: this.state.count - 1 });
  };
  Reset = () => {
    console.log("Reset" + this.state.count);
    this.setState({ count: 0 });

    //------------------------ Auto Increment Functions-------------------------------
  };

  render() {
    return (
      <>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <Button onClick={this.Increase} variant="success">
          Increase
        </Button>{" "}
        <Button onClick={this.Decrease} variant="danger">
          Decrease
        </Button>{" "}
        <Button onClick={this.Reset} variant="warning">
          Reset
        </Button>{" "}
        <Card
          className="text-center mt-4 "
          style={{ justifyContent: "center" }}
        >
          <Card.Body>
            <Card.Title>Auto Increment Counter</Card.Title>
            <Card.Text>
              <Badge bg="primary" pill>
                {this.state.timer}
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SecCounter;
