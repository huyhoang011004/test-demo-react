import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//    state = {
//       isShowListUser: true
//    }
//    render() {
//       return (
//          <div className="display-infor-container">
// <div>
//    <span onClick={() => this.setState({ isShowListUser: !this.state.isShowListUser })}>{this.state.isShowListUser ? "Hide" : "Show"} List Users
//    </span>

// </div>
//             {this.state.isShowListUser &&
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
   const [isShowListUser, setIsShowListUser] = useState(true);
   const handleShowHideListUser = () => {
      setIsShowListUser(!isShowListUser);
   }

   console.log('>>> call me render')

   useEffect(() => {
      console.log('>>> call me useEffect')
      if (props.listUsers.length === 0) {
         alert('You have deleted all the users');
      }
   }, [props.listUsers]);

   return (
      <div className="display-infor-container">
         <div>
            <span onClick={handleShowHideListUser}>{isShowListUser ? "Hide" : "Show"} List Users
            </span>

         </div>
         {isShowListUser &&
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
