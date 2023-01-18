import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Task from "./Task";
import { AiOutlinePlus } from "react-icons/ai";
import { getAllTasks } from "../_redux/actions/task";
import { useSelector, useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.task.task);

  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <h2 className="content__title">Reading List</h2>
          {tasks && tasks.map((task) => <Task task={task} key={task._id} />)}

          <div className="sidebar-footer">
            <AiOutlinePlus />
            <h5>Add Project</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
