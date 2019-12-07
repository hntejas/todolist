import React from "react";
import "./App.css";

import Layout from "./hoc/Layout/Layout";
import TaskBoard from "./containers/TaskBoard/TaskBoard";

function App() {
  return (
    <Layout>
      <TaskBoard></TaskBoard>
    </Layout>
  );
}

export default App;
