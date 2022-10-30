import React from "react";
import CourseGoalListItem from "../CourseGoalListItem/CourseGoalListItem"

import "./CourseGoalList.css"
function CourseGoalList(props) {
    return (
        <div className="goal-list">
            {props.items.map(goal=>(<CourseGoalListItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>{goal.text}</CourseGoalListItem>))}
        </div>
    )
}
export default CourseGoalList;
