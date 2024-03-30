import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RecoilRoot } from "recoil";

import { Example } from "./Example";

function App() {
  return (
    <>
      <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
          <Example />
        </DndProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
