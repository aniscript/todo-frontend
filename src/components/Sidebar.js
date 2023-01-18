import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { getAllProjects, addProject } from "../_redux/actions/project";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [project, setProject] = useState("");

  const handleAddProject = () => {
    dispatch(addProject(project));
  };

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const projects = useSelector((state) => state.projects.projects);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="d-flex align-items-center">
          <FiChevronDown />
          <h5>Projects</h5>
        </div>
        <AiOutlinePlus />
      </div>
      <div className="menu-items">
        <ul>
          {projects &&
            projects.map((item, i) => <li key={item._id}>{item.name} </li>)}
        </ul>
      </div>
      <div className="sidebar-footer">
        <AiOutlinePlus onClick={() => handleAddProject()} />
        <input
          placeholder="Add project"
          onChange={(e) => setProject(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
