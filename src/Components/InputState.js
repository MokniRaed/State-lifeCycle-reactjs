import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function RenderName(props) {
  return <h1>Hello, {props.name}</h1>;
}

class InputState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test Default",
    };
  }

  changeName = (e) => {
    this.setState({ name: e.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Set what you want
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => this.changeName(e)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <RenderName style={{ marginTop: "20px" }} name={this.state.name} />{" "}
      </div>
    );
  }
}

export default InputState;
