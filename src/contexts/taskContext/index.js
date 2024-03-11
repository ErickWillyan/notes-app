import React, { useState, createContext, useContext, useEffect } from "react";
import { AuthContext } from "../auth";
import { listTaskService } from "../../services/Task/listTask";

export const TaskContext = createContext({});

export default function TaskProvider({ children }) {
  const [task, setTask] = useState([]);
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    async function consult() {
      if (isAuthenticated) {
        listTask();
      }
    }
    consult();
  }, [isAuthenticated]);

  async function listTask() {
    const userId = user.id;
    const response = await listTaskService(userId);
    setTask(response.data);
  }

  return (
    <TaskContext.Provider value={{ task, listTask }}>
      {children}
    </TaskContext.Provider>
  );
}
