import React from "react";
import "./DisplayInfor.scss";
class DisplayInfor extends React.Component {
  state = {
    isShowListUsers: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers
    });
  }
  render() {
    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUsers ? "Hide list users" : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUsers &&
          <div>
            {this.props.listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  My name is {user.name} and I'm {user.age} years old
                  <hr />
                </div>
              );
            })}
          </div>}
      </div>
    );
  }
}

export default DisplayInfor;
