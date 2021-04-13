import React from "react";
// import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = ({todo}) => {

  return (
    <div className="todos-list">
      <Todo   todo={todo}  />
     
    </div>
  );
};

export default Todos

// connect(mapsStateToProps, mapDispatchToProps)
