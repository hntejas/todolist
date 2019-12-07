import React, { Component } from "react";
import classes from "./TaskBoard.module.css";

import MiniCard from "../../components/MiniCard/MiniCard";

class TaskBoard extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "First Task",
        description:
          "In the example above, the ondragstart attribute calls a function, drag(event), that specifies what data to be dragged.In the example above, the ondragstart attribute calls a function, drag(event), that specifies what data to be dragged.",
        createdDateTime: "",
        dueDateTime: "",
        status: ""
      },
      {
        id: 2,
        title: "Second Task",
        description: "lorem lipsum",
        createdDateTime: "",
        dueDateTime: "",
        status: "Done"
      },
      {
        id: 2,
        title: "Second Task",
        description: "lorem lipsum",
        createdDateTime: "",
        dueDateTime: "",
        status: "Done"
      },
      {
        id: 2,
        title: "Second Task",
        description: "lorem lipsum",
        createdDateTime: "",
        dueDateTime: "",
        status: "Done"
      }
    ]
  };

  render() {
    let miniCardList = this.state.tasks.map(task => {
      return <MiniCard key={task.id} details={task}></MiniCard>;
    });

    return <div className={classes.taskBoard}>{miniCardList}</div>;
  }
}

export default TaskBoard;
