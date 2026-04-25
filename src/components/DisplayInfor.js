import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//    render() {
//       return (
//          <div className="display-infor-container">
//             {true &&
//                <>
//                   {this.props.listUsers.map((user) => {
//                      return (
//                         <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                            My name is {user.name} and I'm {user.age} years old
//                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                            <hr />
//                         </div>
//                      );
//                   })}
//                </>}
//          </div>
//       );
//    }
// }

const DisplayInfor = (props) => {
   return (
      <div className="display-infor-container">
         {true &&
            <>
               {props.listUsers.map((user) => {
                  return (
                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                        My name is {user.name} and I'm {user.age} years old
                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                        <hr />
                     </div>
                  );
               })}
            </>}
      </div>
   );

}

export default DisplayInfor;
