import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
    };
  }

  cumple = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };

  render() {
    return (
      <div className="card">
        <h3>
          {this.props.lastName}, {this.props.firstName}
        </h3>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={this.cumple}>
          Birthday Button for {this.props.firstName} {this.props.lastName}
        </button>
      </div>
    );
  }
}

export default Card;
