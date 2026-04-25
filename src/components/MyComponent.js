import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoang", age: 16 },
      { id: 2, name: "Nguyen", age: 25 },
      { id: 3, name: "Phuc", age: 69 },
    ],
  };
  handleAddNewUser = (userObject) => {
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  }
  //JSX
  render() {
    // DRY: Don't Repeat Yourself
    return (
      <>
        <AddUserInfor
          handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
        />
      </>
    );
  }
}


export default MyComponent;
