import React from "react";
import "./CourseGoalListItem.css"
function CourseGoalListItem(props) {

  const deleteHandler = () => {
    props.onDelete(props.id);
  }
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalListItem;
