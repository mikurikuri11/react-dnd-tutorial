import { FC } from "react";

import { useDrag } from "react-dnd";

import itemTypes from "../dnd/itemType";
import { Task } from "../types";

interface Props {
  name: string;
  task: Task;
}

export const TaskCard: FC<Props> = (props) => {
  const { name, task } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: itemTypes.CARD,
      ID: task.id,
    },
    type: itemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? "opacity-50" : "";

  return (
    <div
      ref={drag}
      className={`flex justify-center items-center rounded-2xl h-14 w-60 bg-white ${opacity}`}
    >
      <div>{name}</div>
    </div>
  );
};
