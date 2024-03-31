import { FC, createContext } from "react";
import { useState } from "react";

import { Modal, Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDrop } from "react-dnd";

import { TaskCard } from "./TaskCard";
import itemTypes from "../dnd/itemType";
import { ITEM, Task } from "../types";

export const CardContext = createContext({
  markAsDone: (id: string) => {
    console.log("Task marked as done", id);
  },
});

export type DropResult = {
  colNumber: number;
};

interface Props {
  colNumber: number;
}

export const Column: FC<Props> = (props) => {
  const { colNumber } = props;

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item: ITEM) => markAsDone(item.ID),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [opened, { open, close }] = useDisclosure(false);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, content: "Task 1", columnId: 1 },
    { id: 2, content: "Task 2", columnId: 2 },
    { id: 3, content: "Task 3", columnId: 3 },
    { id: 4, content: "Task 4", columnId: 4 },
  ]);

  const markAsDone = (id: string) => {
    const draggedTask = tasks.filter((task) => task.id === id)[0];
    draggedTask.columnId = colNumber;
    setTasks(tasks.filter((task) => task.id !== id).concat(draggedTask));
    console.log("Task marked as done", tasks);
  };

  return (
    <CardContext.Provider value={{ markAsDone }}>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        Hello
      </Modal>
      <Stack
        ref={drop}
        h={600}
        w={300}
        bg="gray"
        justify="flex-start"
        align="center"
        className={`p-4 rounded-lg ${isOver ? "bg-red-500" : ""}`}
      >
        {tasks
          .filter((task) => task.columnId === colNumber)
          .map((task) => (
            <TaskCard key={task.id} name={task.content} task={task} />
          ))}
      </Stack>
      <Button fullWidth variant="default" color="gray" onClick={open}>
        Button
      </Button>
    </CardContext.Provider>
  );
};
