import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RecoilRoot } from "recoil";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { IndexPage } from "./components/IndexPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
          <MantineProvider>
            <IndexPage />
          </MantineProvider>
        </DndProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
