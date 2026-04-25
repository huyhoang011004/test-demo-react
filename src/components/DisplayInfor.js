import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        My name is {this.props.name} and I'm {this.props.age} years old
      </div>
    );
  }
}

export default DisplayInfor;
