import React from "react";
const Student = (props) => {
    const { roll,name,marks} = props;
  
    return (
      <div className="student">
        <ul>
        <li><h2>{roll} --- {name} --- {marks}</h2></li>
        </ul>
      </div>
    );
  };

export default Student;