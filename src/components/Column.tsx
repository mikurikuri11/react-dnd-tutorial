import { FC, createContext } from "react";

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
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const Column: FC<Props> = (props) => {
  const { colNumber, tasks, setTasks } = props;

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item: ITEM) => markAsDone(item.ID),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [opened, { open, close }] = useDisclosure(false);

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
        className={`p-4 rounded-lg ${isOver ? "bg-gray-500" : ""}`}
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
