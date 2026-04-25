import React from "react";

class DisplayInfor extends React.Component {
  render() {
    return (
      <div>
        {this.props.listUsers.map((user) => {
          return (
            <div key={user.id}>
              My name is {user.name} and I'm {user.age} years old
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
