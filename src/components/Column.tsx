import { FC } from "react";

import { Modal, Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDrop } from "react-dnd";
import { useRecoilValue } from "recoil";

import { DraggableItem } from "./DraggableItem";
import { DnDItems } from "../dnd/DnDItems";
import { droppedColumnState } from "../recoil/droppedColumn";

export type DropResult = {
  colNumber: number;
};

type Props = {
  colNumber: number;
};

export const Column: FC<Props> = ({ colNumber }) => {
  const [, drop] = useDrop({
    accept: DnDItems.Todo,
    drop: () => ({ colNumber }),
  });

  const isDropped = useRecoilValue(droppedColumnState) === colNumber;

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
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
        className="p-4 rounded-lg"
      >
        {/* ドロップされた場合はドラッグしたコンポーネントを表示 */}
        {isDropped && <DraggableItem name="Drag Item" />}
        {isDropped && <DraggableItem name="Drag Item" />}
        {isDropped && <DraggableItem name="Drag Item" />}
        {isDropped && <DraggableItem name="Drag Item" />}
      </Stack>
      <Button fullWidth variant="default" color="gray" onClick={open}>
        Button
      </Button>
    </>
  );
};
