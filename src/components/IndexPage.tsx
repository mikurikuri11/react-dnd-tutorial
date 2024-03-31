import { useState } from "react";

import { Column } from "../components/Column";
import { Task } from "../types";

export const IndexPage = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, content: "Task 1", columnId: 1 },
    { id: 2, content: "Task 2", columnId: 2 },
    { id: 3, content: "Task 3", columnId: 3 },
    { id: 4, content: "Task 4", columnId: 4 },
  ]);

  return (
    <div className="flex gap-4 justify-center items-center mt-12">
      {[1, 2, 3, 4].map((colNumber) => (
        <div key={colNumber}>
          <Column colNumber={colNumber} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
};
