import { FC } from "react";

import { useDrag } from "react-dnd";
import { useRecoilState } from "recoil";

import { DropResult } from "../components/Column";
import { DnDItems } from "../dnd/DnDItems";
import { droppedColumnState } from "../recoil/droppedColumn";

type Props = {
  name: string;
};

export const DraggableItem: FC<Props> = ({ name }) => {
  const [, setDroppedColumnNumber] = useRecoilState(droppedColumnState);

  const [collected, drag] = useDrag({
    type: DnDItems.Todo,
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult) {
        setDroppedColumnNumber(dropResult.colNumber);
      }
    },
    collect: (monitor) => {
      return { dragging: monitor.isDragging() };
    },
  });

  const { dragging } = collected;

  const opacity = dragging ? "opacity-50" : "opacity-100";

  return (
    <div
      ref={drag}
      className={`flex justify-center items-center rounded-2xl h-14 w-60 bg-white ${opacity}`}
    >
      <div>{name}</div>
    </div>
  );
};
