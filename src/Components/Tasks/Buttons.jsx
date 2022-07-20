import React, {useState} from "react";
import data from "./data";

// const alertYou = () => {
//     alert('this works');
// }

const Button = (props) => {
    const [refresh, setRefresh] = useState(false)



  const nextUser = () => {
    if (props.input !== data.length - 1) {
      return props.setInput(props.input + 1); // when i push this button, go to the next one
    }
    return alert("no more users");
  };
  const previousUser = () => {
    if (props.input !== 0) {
      props.setInput(props.input - 1);
    }
  };
  const deleteUser = () => {
    if (props.input === 0) {
      data.splice(props.input, 1);
      setRefresh(true);
    } else {
      data.splice(props.input, 1);
      props.setInput(props.input - 1);
    }
  };

  return (
    <div className="btn-container">
      <button onClick={() => previousUser()} className="previous">
        {"< "}Previous
      </button>
      <div className="edit-container">
        <button className="edit-btn">Edit</button>
        <button className="edit-btn" onClick={deleteUser}>
          Delete
        </button>
        <button className="edit-btn">New</button>
      </div>
      <button onClick={() => nextUser()} className="next-btn">
        Next{" >"}
      </button>
    </div>
  );
};

export default Button;
