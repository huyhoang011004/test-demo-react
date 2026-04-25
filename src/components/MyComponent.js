import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Hoang" age="22" />
        <DisplayInfor name="Nguyen" age="22" myInfor={myInfor} />
      </div>
    );
  }
}


export default MyComponent;
