import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoang", age: 16 },
      { id: 2, name: "Nguyen", age: 25 },
      { id: 3, name: "Phuc", age: 69 },
    ],
  };
  //JSX
  render() {
    // DRY: Don't Repeat Yourself
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}


export default MyComponent;
