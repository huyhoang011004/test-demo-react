import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//    state = {
//       listUsers: [
//          { id: 1, name: "Hoang", age: 16 },
//          { id: 2, name: "Nguyen", age: 25 },
//          { id: 3, name: "Phuc", age: 69 },
//       ],
//    };
//    handleAddNewUser = (userObject) => {
//       this.setState({
//          listUsers: [userObject, ...this.state.listUsers],
//       });
//    }
//    handleDeleteUser = (userId) => {
//       let listUsersClone = [...this.state.listUsers];
//       listUsersClone = listUsersClone.filter(item => item.id !== userId);
//       this.setState({
//          listUsers: listUsersClone
//       })
//    }
//    //JSX
//    render() {
//       // DRY: Don't Repeat Yourself
//       return (
//          <>
//             <AddUserInfor
//                handleAddNewUser={this.handleAddNewUser} />
//             <br />
//             <br />
//             <DisplayInfor
//                listUsers={this.state.listUsers}
//                handleDeleteUser={this.handleDeleteUser}
//             />
//          </>
//       );
//    }
// }

const MyComponent = (props) => {
   const [listUsers, setListUsers] = useState([
      { id: 1, name: "Hoang", age: 16 },
      { id: 2, name: "Nguyen", age: 25 },
      { id: 3, name: "Phuc", age: 69 },
   ]);
   const handleAddNewUser = (userObject) => {
      setListUsers([userObject, ...listUsers]);
   }
   const handleDeleteUser = (userId) => {
      let listUsersClone = [...listUsers];
      listUsersClone = listUsersClone.filter(item => item.id !== userId);
      setListUsers(listUsersClone);
   }
   //JSX
   return (
      <>
         <AddUserInfor
            handleAddNewUser={handleAddNewUser} />
         <br />
         <br />
         <DisplayInfor
            listUsers={listUsers}
            handleDeleteUser={handleDeleteUser}
         />
      </>
   );
}

export default MyComponent;
